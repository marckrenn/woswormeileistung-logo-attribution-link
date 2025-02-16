export interface Person {
    id: string;
    name: string;
    url: string;
    parties: string[];
    imageUrl?: string;
    periods: string[];
    givenName: string;
    familyName: string;
    titles: string[];
}

export interface SpeakerSection {
    speaker: Person | string;
    text: string;
    callouts: Callout[];
    links: Link[];
}

export interface Session {
    url: string;
    period: string;
    sessionNumber: number;
    sessionLabel: string;
    date: string;
    protocolUrls: string[];
    sections: SpeakerSection[];
}

export type SessionSection = { date: string; period: string; session: number; sectionIndex: number; section: SpeakerSection };

export interface Callout {
    caller?: Person | string;
    text: string;
}

// A single scream by a person directed at another
// person during the other person's speaker section.
export interface Scream {
    period: string;
    session: number;
    section: number;
    date: string;
    text: string;
    person: Person;
    direction: "from" | "to";
}

// All screams by a specific sperson
export interface Screamer {
    person: Person;
    screams: Scream[];
}

// All screams by a person directed at another
// person during the other person's speaker section.
export interface SectionScreams {
    period: string;
    session: number;
    section: number;
    date: string;
    person: Person;
    direction: "from" | "to";
    texts: string[];
}

export interface Link {
    label: string;
    url: string;
}

export interface PlaqueCallout {
    date: string;
    period: string;
    session: number;
    section: number;
    text: string;
}

export interface Plaque {
    person: Person;
    callouts: PlaqueCallout[];
}

export type Missing = { sourceText: string; date: string; period: string; session: number; persons: ({ nameInText: string } & Person)[] };
export type MissingEntry = { sourceText: string; date: string; period: string; session: number; nameInText: string };
export type MissingPerson = { person: Person; missing: MissingEntry[] };

export const periods = new Set<string>(["XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII"]);
export const periodDates = [
    { name: "XXII", dates: "20.12.2002 – 29.10.2006" },
    { name: "XXIII", dates: "30.10.2006 – 27.10.2008" },
    { name: "XXIV", dates: "28.10.2008 – 28.10.2013" },
    { name: "XXV", dates: "29.10.2013 – 08.11.2017" },
    { name: "XXVI", dates: "09.11.2017 – 22.10.2019" },
    { name: "XXVII", dates: "23.10.2019 -" },
];

// See https://www.parlament.gv.at/recherchieren/statistiken/personen-statistiken/zusammensetzung-nr
export const partiesPerPeriod = new Map<string, string[]>([
    ["XXII", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "Ohne Klub"]],
    ["XXIII", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "BZÖ", "Ohne Klub"]],
    ["XXIV", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "BZÖ", "Ohne Klub"]],
    ["XXV", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "NEOS", "STRONACH", "Ohne Klub"]],
    ["XXVI", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "NEOS", "PILZ", "Ohne Klub"]],
    ["XXVII", ["ÖVP", "SPÖ", "FPÖ", "GRÜNE", "NEOS", "Ohne Klub"]],
]);

export const partyColors: Record<string, string> = {
    ÖVP: "98, 194, 206",
    SPÖ: "237, 27, 36",
    FPÖ: "1, 93, 166",
    GRÜNE: "132, 180, 19",
    NEOS: "233, 66, 136",
    "Ohne Klub": "124, 124, 124",
    BZÖ: "238, 127, 0",
    STRONACH: "211, 56, 54",
    PILZ: "40, 40, 40",
};

export function getPartiesForPeriods(periods: string[] | Iterable<string>) {
    const parties: string[] = [];
    for (const period of periods) {
        const ps = partiesPerPeriod.get(period);
        if (!ps) throw new Error("No parties for period " + period);
        parties.push(...ps!);
    }
    return parties;
}

export class Persons {
    idToPerson = new Map<string, Person>();
    idToNameParts = new Map<string, string[]>();

    constructor(public persons: Person[]) {
        this.addAll(this.persons);
    }

    addAll(persons: Person[]) {
        for (const person of persons) {
            this.add(person);
        }
    }

    add(person: Person) {
        if (this.idToPerson.has(person.id)) {
            return;
        }
        this.idToPerson.set(person.id, person);
        const nameParts = person.name
            .toLowerCase()
            .replace(/ı/g, "i") // Replace dotless 'ı' with 'i'
            .split(",")[0]
            .split(/\s+/)
            .filter((part) => !part.includes("("))
            .map((part) => [...part.split("-"), part])
            .flat();
        this.idToNameParts.set(person.id, nameParts);
    }

    byId(id: string) {
        return this.idToPerson.get(id);
    }

    private static levenshtein(a: string, b: string): number {
        const matrix = [];

        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) == a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }

        return matrix[b.length][a.length];
    }

    /*search(query: string, period?: string) {
        const normalizedQuery = query
            .toLowerCase()
            .replace(/ı/g, "i") // Replace dotless 'ı' with 'i'
            .split(/\s+/)
            .filter((part) => part);

        const persons = period ? this.persons.filter((p) => p.periods.includes(period)) : this.persons;
        const scoredNames = persons.map((person) => {
            const nameParts = this.idToNameParts.get(person.id)!;
            const score = normalizedQuery.reduce((acc, queryPart) => {
                // Find the best match for each query part in name parts
                const partScores = nameParts.map((namePart) => Persons.levenshtein(queryPart, namePart));
                const bestMatch = Math.min(...partScores);
                return acc + bestMatch;
            }, 0);
            return { person, score };
        });

        // Sort by total score (sum of best matches for all query parts), then by name length for similarly scored names
        scoredNames.sort((a, b) => a.score - b.score || a.person.name.length - b.person.name.length);
        return scoredNames.slice(0, 5);
    }*/

    search(query: string, period?: string) {
        const normalizedQuery = query
            .toLowerCase()
            .replace(/ı/g, "i") // Replace dotless 'ı' with 'i'
            .split(/\s+/)
            .filter((part) => part);

        const persons = period ? this.persons.filter((p) => p.periods.includes(period)) : this.persons;
        const scoredNames = persons.map((person) => {
            const nameParts = this.idToNameParts.get(person.id)!;
            let score = 0;
            let lastIndex = -1;

            for (const queryPart of normalizedQuery) {
                // Initialize high score for comparison; lower scores are better
                let bestMatchScore = Infinity;
                let bestMatchIndex = -1;

                for (let i = lastIndex + 1; i < nameParts.length; i++) {
                    const currentScore = Persons.levenshtein(queryPart, nameParts[i]);
                    if (currentScore < bestMatchScore) {
                        bestMatchScore = currentScore;
                        bestMatchIndex = i;
                    }
                }

                // Update score and last index if a match was found
                if (bestMatchIndex !== -1) {
                    score += bestMatchScore;
                    lastIndex = bestMatchIndex;
                } else {
                    // If no match was found in the remaining name parts, penalize heavily
                    score += 100;
                }
            }

            return { person, score };
        });

        // Sort by total score, then by name length for similarly scored names
        scoredNames.sort((a, b) => a.score - b.score || a.person.name.length - b.person.name.length);
        return scoredNames.slice(0, 5);
    }
}
