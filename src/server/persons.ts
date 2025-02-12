import * as fs from "fs";
import { periods } from "../common/common";
import { Person } from "../common/common";
import { sleep } from "../utils/utils";

function extractSpanInnerText(html: string) {
    const regex = /<span[^>]*>(.*?)<\/span>/g;
    let matches;
    const innerTexts = [];

    while ((matches = regex.exec(html)) !== null) {
        innerTexts.push(matches[1]);
    }

    return innerTexts;
}

export function processName(name: string): { givenName: string; familyName: string; titles: string[] } {
    const tokens: string[] = [];
    name.split(" ").forEach((token) => {
        if (token.endsWith(",")) {
            tokens.push(token.slice(0, -1), ",");
        } else {
            tokens.push(token);
        }
    });

    const titleParts: string[] = [];
    const nameParts: string[] = [];
    let inTitleSuffix = false;
    tokens.forEach((token) => {
        if (token.includes(".")) {
            titleParts.push(token);
        } else if (token.includes("(")) {
            titleParts[titleParts.length - 1] += " " + token;
        } else if (token === ",") {
            inTitleSuffix = true;
        } else {
            if (inTitleSuffix) {
                titleParts.push(token);
            } else {
                nameParts.push(token);
            }
        }
    });

    const familyName = nameParts.pop() || "";
    const givenName = nameParts.join(" ");
    return { givenName, familyName, titles: titleParts };
}

const cache = new Map<string, { parties: string[]; imageUrl: string | undefined }>();
export async function getMetadata(personId: string) {
    if (cache.has(personId)) return cache.get(personId)!;
    let retries = 3;

    while (true) {
        try {
            const response = await fetch(`https://parlament.gv.at/person/${personId}?json=true`);
            if (!response.ok) {
                throw new Error(await response.text());
            }
            const json = await response.json();
            const str = JSON.stringify(json).toLowerCase();
            const parties = new Set<string>();
            if (str.includes("spö")) parties.add("SPÖ");
            if (str.includes("övp")) parties.add("ÖVP");
            if (str.includes("grüne")) parties.add("GRÜNE");
            if (str.includes("fpö")) parties.add("FPÖ");
            if (str.includes("Klub der Freiheitlichen Partei Österreichs")) parties.add("FPÖ");
            if (str.includes("bzö")) parties.add("BZÖ");
            if (str.includes("neos")) parties.add("NEOS");
            if (str.includes("stronach")) parties.add("STRONACH");

            const metadata = {
                parties: Array.from(parties),
                imageUrl: json.content?.biografie?.portrait?.src ?? json.content?.banner?.portrait?.src,
            };
            cache.set(personId, metadata);
            return metadata;
        } catch (e) {
            retries--;
            if (retries > 0) {
                console.error("Failed to fetch person metadata for " + personId + ", retrying", e);
                await sleep(500);
            } else throw e;
        }
    }
}

export async function processPersons(baseDir: string) {
    cache.clear();
    if (baseDir.endsWith("/")) {
        baseDir = baseDir.slice(0, -1);
    }
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
    }

    const response = await fetch(
        "https://www.parlament.gv.at/Filter/api/json/post?jsMode=EVAL&FBEZ=WFW_004&listeId=undefined&showAll=true&export=true",
        {
            method: "POST",
            body: JSON.stringify({
                NRBR: ["NR"],
                R_WF: ["FR"],
                R_BW: ["BL"],
                M: ["M"],
                W: ["W"],
            }),
        }
    );
    if (!response.ok) {
        throw new Error(await response.text());
    }
    const rawData = await response.json();
    const persons: Person[] = [];
    const seenParties = new Set<string>();
    for (const row of rawData.rows) {
        const personPeriods = extractSpanInnerText(row[4]);
        let foundPeriod = personPeriods.some((p) => periods.has(p));
        if (!foundPeriod) {
            continue;
        }
        const parties = extractSpanInnerText(row[3])
            .map((party) => {
                switch (party) {
                    case "F":
                        return ["FPÖ"];
                    case "F-BZÖ":
                        return ["BZÖ"];
                    case "NEOS-LIF":
                        return ["NEOS"];
                    case "OK":
                        return ["Ohne Klub"];
                    case "JETZT":
                        return ["PILZ"];
                    default:
                        return [party];
                }
            })
            .flat();
        parties.forEach((party) => seenParties.add(party));
        const id = row[0];
        const response = await fetch(`https://parlament.gv.at/person/${id}?json=true`);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const json = await response.json();
        const imageUrl = json.content?.biografie?.portrait?.src ?? json.content?.banner?.portrait?.src;
        const name =
            json.content?.headingbox?.title
                .trim()
                .replace(/\u00AD/g, "")
                .replace(/\xa0/g, " ")
                .replace(/\n/g, " ") ??
            row[2]
                .trim()
                .replace(/\u00AD/g, "")
                .replace(/\xa0/g, " ")
                .replace(/\n/g, " ");
        const nameParts = processName(name);
        persons.push({
            id,
            name,
            givenName: nameParts.givenName,
            familyName: nameParts.familyName,
            titles: nameParts.titles,
            parties: Array.from(new Set<string>(parties)).sort(),
            periods: personPeriods.sort(),
            url: "https://parlament.gv.at/person/" + id,
            imageUrl: imageUrl ? "https://parlament.gv.at" + imageUrl : undefined,
        });

        // special case...
        if (row[2].includes("Gartelgruber")) {
            persons.push({
                id,
                name: "Carmen Gartelgruber",
                givenName: "Carmen",
                familyName: "Gartelgruber",
                titles: [],
                parties: Array.from(new Set<string>(parties)).sort(),
                periods: personPeriods.sort(),
                url: "https://parlament.gv.at/person/" + id,
                imageUrl: imageUrl ? "https://parlament.gv.at" + imageUrl : undefined,
            });
        }
        console.log("Processed " + persons.length + "/" + rawData.rows.length + " persons");
    }
    fs.writeFileSync(`${baseDir}/persons.json`, JSON.stringify(persons, null, 2), "utf-8");
    return persons;
}
