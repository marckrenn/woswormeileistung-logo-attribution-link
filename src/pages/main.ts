import hljs from "highlight.js";
import { LitElement, PropertyValueMap, html } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { customElement } from "lit/decorators.js";
import { pageContainerStyle, pageContentStyle } from "../utils/styles.js";
import { BaseElement } from "../app.js";

@customElement("page-footer")
export class PageFooter extends BaseElement {
    render() {
        return html`<div class="flex flex-col text-xs text-center text-fg-muted pb-4 px-4 mt-8">
            <span>Mit Spucke und Tixo gebaut von <a href="https://twitter.com/badlogicgames" class="text-blue-400">Mario Zechner</a></span>
            <span>Logo von <a href="https://twitter.com/RaffiReithofer" class="text-blue-400">Raffael Reithofer</a></span>
            <span>Es werden keine Daten gesammelt, nicht einmal deine IP Adresse</span>
        </div>`;
    }
}

@customElement("main-page")
export class MainPage extends LitElement {
    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.firstUpdated(_changedProperties);
    }

    render() {
        const code = (code: string) => {
            return unsafeHTML(hljs.highlight(code.trim(), { language: "json" }).value);
        };

        return html`<div class="${pageContainerStyle} min-h-[100vh]">
            <div class="${pageContentStyle} h-[100vh]">
                <div class="flex-grow flex flex-col w-full mt-4 gap-4 px-4">
                    <theme-toggle class="self-end"></theme-toggle>
                    <div class="flex gap-4 items-center justify-center text-4xl">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
                            <g id="layer1">
                                <g id="g113">
                                    <path
                                        id="path2"
                                        fill-rule="evenodd"
                                        d="m121.5 114.6c0 1.7-2.6 3-5.8 3h-40.5c-22.1 0-44.2-0.7-66.2-2.2-0.7-0.1-1.1-0.4-1.1-0.8-1.4-0.7-1.1-4 0.5-7.7 1-1.8 1.8-3.8 2.9-5.7 0.3-0.5 0.6-0.9 0.9-1.4l0.9-1.6c0.5-1 1.3-1.6 2.2-1.9 0.4-0.1 0.9-0.2 1.4-0.2 0.4 0 0.5 0 0.8 0 1.5-0.3 3-0.4 4.6-0.5v-16.6c0-8.7 0.6-17.5 1.7-26.1-0.6 0-1.2 0-1.9 0.1-1.5 0.1-2.9 0.3-4.8 0-0.7-0.1-1.4-0.3-2-0.6-0.7-0.1-1.3-0.5-1.7-0.9-1-0.9-1.2-2.3-1.1-3.8l0.1-0.9v-1.5l-0.1-2.3c0-0.4 0.1-1.3 0.3-1.9 0.1-0.7 0.5-1.4 0.9-2 1-1.1 1.4-1.4 2.2-2 2.5-2.1 5.3-3.2 7.7-4.4 9.9-5.5 19.7-11 29.5-16.4 2.3-1.3 4.6-3.1 7.3-4.5 1.3-0.8 2.7-1.5 4.5-1.7 0.9-0.2 2-0.1 2.9 0.2 0.7 0.2 1.4 0.6 2.2 0.9 2.7 1.5 4.9 3.4 7.2 4.9 1.1 0.7 2.4 1.5 3.5 2.2l3.6 2.3c9.6 6 19.2 12.1 28.7 18.2 1.2 0.7 1.7 1.4 1.5 1.8q1 0 1.9 2.5c0.3 0.9 0.6 1.9 0.8 3.1l0.1 0.5c0.1 0.1 0.1 0.2 0.1 0.6 0 0.5 0.1 1.1 0 1.7-0.1 0.2-0.1 0.6-0.2 0.8-0.1 0.3-0.1 0.6-0.2 0.9-0.1 0.1-0.1 0.3-0.2 0.4l-0.2 0.3-0.6 0.7c-0.3 0.2-0.6 0.4-1 0.6-0.4 0.2-0.8 0.2-1.2 0.2-0.9 0.1-2.2 0-2.5 0l-3.7-0.2v17.1c0 9-0.6 18.1-1.9 27.1h1.1c1.2 0.1 2.6 0.2 3.7 0.2 0.7 0 1.4 0 2.2 0.1 0.7 0 1.7 0.4 2.5 1.1 0.7 0.6 1.1 1.2 1.4 1.9 0.3 0.7 0.6 1.4 0.9 2 0.4 1.2 0.9 2.5 1.3 3.7 0.2 0.6 0.5 1.1 0.7 1.7l0.8 1.8 1.6 3.6c0.4 0.8 0.3 1.3-0.2 1.6zm-84.6-18.9l4.3 0.2c1.3 0 2.6 0 3.9 0v-17.1c0-8.7 0.7-17.5 1.8-26.1h-8.3v17.1c0 8.6-0.5 17.3-1.7 25.9zm-3.8-25.9v-17.1h-7.1c1.1 8.6 1.8 17.4 1.8 26.1v16.6q0.9 0 1.8 0l5.2 0.2c-1.1-8.6-1.7-17.3-1.7-25.8zm17.5 9v17.1q1.1 0 2.2 0c1.6 0 3.4 0 5 0-1.1-8.7-1.7-17.4-1.7-26.1v-17.1h-7.2c1.2 8.6 1.7 17.4 1.7 26.1zm9.2 17.1c2.8 0.1 5.6 0.1 8.3 0.1v-17.2c0-8.7 0.6-17.5 1.7-26.1h-8.2v17.1c0 8.7-0.7 17.4-1.8 26.1zm13.8-17v17.2c2.4 0 4.8 0 7.2 0.1-1.1-8.8-1.8-17.6-1.8-26.4v-17.1h-7.1c1.2 8.6 1.7 17.4 1.7 26.2zm9.1 17.2c0.3 0 0.6 0 0.8 0q3.8 0.2 7.6 0.3c0 0 0-17.5 0-17.6 0-8.7 0.6-17.5 1.7-26.1h-8.3v17.1c0 8.8-0.6 17.6-1.8 26.3zm14-17.2c0 0.1 0 17.7 0 17.8 0.7 0 1.5 0 2.3 0l4.9 0.2c-1.3-9.1-1.9-18.1-1.9-27.1v-17.1h-7.2c1.2 8.6 1.8 17.4 1.9 26.2zm-70.8-32.2h83.5c0.4 0 0.6 0.1 0.9 0.1l1.2 0.1c0.7 0.1 0.4 0.1 0.5 0.1l0.1 0.1c0 0 0 0 0.1 0 0 0 0.1-0.1 0.1-0.2 0.1 0 0.1-0.2 0.1-0.3l0.1-0.4c0.1-1.1 0.3-2.2 0.4-3 0.3-1.3 0.7-2.3 1.1-2.6-0.4 0-1-0.3-1.8-0.7q-14.7-8.3-29.5-16.6l-3.7-2.1c-1.1-0.7-2.3-1.3-3.7-2.1-2.4-1.5-4.7-3.2-7-4.3-0.5-0.3-1.1-0.5-1.6-0.6-0.5-0.1-0.7-0.1-1.3 0-0.9 0.1-2.1 0.6-3.2 1.3-2.3 1.4-4.4 3.2-7.1 4.8l-14.7 8.6-7.3 4.4-3.7 2.1-1.8 1.1c-0.7 0.4-1.3 0.7-2 1.1-2.6 1.3-5 2.4-6.9 4-0.1 0.1-0.4 0.4-0.6 0.6-0.2 0.1-0.4 0.3-0.3 0.3v0.3l0.1 2.2v2c0 0 0 0 0 0 0.9 0.2 2.2 0.1 3.6-0.1 0.7-0.1 1.4-0.1 2.3-0.1zm49.5 64.6h40.6c1.4 0 2.7 0.4 3.8 0.8l-1.2-2-0.9-1.7c-0.3-0.5-0.7-1.2-0.9-1.7-0.6-1.2-1.1-2.4-1.7-3.5-0.2-0.5-0.5-1-0.9-1.6-0.3-0.5-0.7-0.9-0.9-1.1-0.2-0.1-0.5-0.2-1-0.2-0.5 0-1.1 0-1.8 0.1-1.4 0.1-2.5 0.1-3.9 0.1l-7.7 0.3c-5.1 0.1-10.2 0.3-15.3 0.4-10.2 0.3-20.5 0.4-30.8 0.4-3.9 0-7.7 0-11.7 0l-11.6-0.5c-3.9 0-7.6 0-11.3 0.5l-0.7 0.1-0.6 1.1q-0.4 0.6-0.7 1.2c-1 1.7-1.8 3.5-2.7 5.4-0.8 1.8-1.9 3.3-2.9 4.2 21.5-1.4 43.2-2.1 64.8-2.1zm-42.3-70.8c-0.3-0.9-0.4-1.9-0.6-2.8l11.6-6.5 13.7-7.5 1.6-0.8c0.4-0.3 1-0.7 1.5-1.1 0.6-0.3 1.2-0.7 1.8-1.1 0.6-0.2 1.8-0.8 2.9-0.8 0.5 0 1.1 0.2 1.7 0.5 0.3 0.3 0.4 0.3 0.6 0.4l0.6 0.4c0.6 0.5 1.2 1 1.7 1.3 0.1 0.1 0.2 0.2 0.3 0.3l0.5 0.2 0.9 0.6 1.8 1.2 7.3 4.8c4.5 2.9 8.9 5.9 13.3 8.9 0.6 0.2 1 0.5 1.3 0.8 0.5 0.4 0.6 0.9 0.5 1.1 0 1.6-3.1 3-6.9 3h-55.6zm11.5-3.1c-0.1 0-0.1 0 0 0.1 0.1 0 44.6 0 44.6 0-3.2-1.7-6.4-3.4-9.6-5.1l-10.4-5.6-0.4-0.2c-0.2-0.1-0.4-0.3-0.6-0.4-0.7-0.4-1.2-0.8-1.8-1.1l-0.4-0.3c-0.1-0.1-0.3-0.2-0.3-0.2-0.1-0.1-0.2-0.1-0.2-0.1-0.2 0-0.2 0-0.7 0.4-0.4 0.2-1 0.7-1.5 1-0.5 0.3-1 0.8-1.6 1.2-0.4 0.2-0.7 0.4-1 0.6l-0.8 0.5-6.7 4-6.7 4-1.6 1-0.3 0.2q0 0 0 0zm0 0q0 0 0 0 0 0 0 0 0 0 0 0z"
                                    />
                                </g>
                            </g>
                        </svg>
                        <div class="text-center">
                            Wos wor mei <br />
                            Leistung?
                        </div>
                    </div>
                    <p class="text-center italic text-sm">
                        Ein Datenprojekt basierend auf den stenographischen Protokollen aller Sitzungen des Österreichischen Parlaments ab dem
                        20.12.2002
                    </p>
                    <p class="text-center text-xs italic">
                        Ja, das Meischberger Zitat lautet "Wo wor mei Leistung". Hier wollen wir aber wissen "wos" die Leistung war.
                    </p>
                    <h1>Recherche Tools</h1>
                    <div>
                        Hier entstehen verschiedene Recherche bzw. Analyse Tools, basierend auf den unten beschrieben Daten. Einfach auf das
                        entsprechende Kasterl klicken :D
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <a class="flex flex-col gap-2 max-w-[50%] border border-primary rounded-md p-4 text-center" href="/persons">
                            <span class="text-lg font-bold">Personen Recherche</span>
                            <p>Personen suchen und deren Zwischenrufe, Abwesenheiten, Taferln und Redebeiträge analysieren.</p>
                        </a>
                    </div>
                    <h1>Daten</h1>
                    <p>
                        Im Rahmen des Projekts werden die
                        <a class="text-blue-400" href="https://www.parlament.gv.at/recherchieren/open-data/daten-und-lizenz/index.html"
                            >Rohdaten der Open Data Schnittstelle</a
                        >
                        des Parlaments verarbeitet, normiert, und in ein einfach(er) zu verarbeitendes Datenformat, inklusive Konvertierung auf UTF-8,
                        übergeführt. Der Fokus liegt hierbei auf Daten zu im Parlament vertretenen Personen sowie den stenographischen Protokollen der
                        Nationalratssitzungen ab dem 20.12.2002.
                    </p>

                    <p>Die Daten sollen für wissenschaftliche Arbeiten sowie Daten-Journalismus zugänglicher gemacht werden.</p>
                    <h2>Lizenz</h2>
                    <p>
                        Die originalen Datensätze unterliegen der
                        <a class="text-blue-400" href="https://creativecommons.org/licenses/by/4.0/deed.de">CC BY 4.0 Lizenz</a>. Die hier zur
                        Verfügung gestellten transformierten Daten unterliegen ebenfalls der CC BY 4.0 Lizenz.
                    </p>
                    <h2>Personen Daten</h2>
                    <p>
                        Der Personen-Datensatz ist im JSON-Format unter folgendem Link verfügbar:
                        <a class="text-blue-400" href="/data/persons.json">persons.json (192KB)</a>
                    </p>
                    <p>
                        Der Datensatz beinhaltet Informationen zu allen Personen, die ab dem 20.12.2002 im Parlament zumindest eine Wortmeldung
                        getätigt haben (entweder am Podium oder per Zuruf).
                    </p>

                    <p>Die JSON-Datei hat folgende Struktur:</p>
                    <pre><code>
${code(`
[
  {
    "id": "3612",
    "name": "Sonja Ablinger",
    "parties": [
      "SPÖ"
    ],
    "periods": [
      "XX",
      "XXIII",
      "XXIV"
    ],
    "url": "https://parlament.gv.at/person/3612",
    "imageUrl": "https://parlament.gv.at/dokument/bild/34898/3489874_384.jpg"
  },
  {
    "id": "14854",
    "name": "Dipl.-Ing. Elke Achleitner",
    "parties": [
      "BZÖ",
      "FPÖ"
    ],
    "periods": [
      "XXII"
    ],
    "url": "https://parlament.gv.at/person/14854",
    "imageUrl": "https://parlament.gv.at/dokument/bild/21013/2101309_384.jpg"
  },
  ... weitere Personen ...
]
`)}
                    </code></pre>
                    <p>Jeder Eintrag hat dabei folgende Felder:</p>
                    <ul class="px-4">
                        <li><b>id</b>: die Parlaments-ID der Person.</li>
                        <li>
                            <b>name</b>: Der Name der Person, inklusive Titel. Titel sind sowohl vor als auch nach dem Namen (getrennt durch ein
                            Komma) möglich, z.B. <code>Mag. Hannes Amesbauer, BA</code>.
                        </li>
                        <li>
                            <b>parties</b>: Parteizugehörigkeit, so in den Parlamentsdaten eruierbar. Bei mehreren Einträgen gibt die Reihenfolge der
                            Liste nicht die chronologische Reihenfolge wieder! Mögliche Werte: <code>ÖVP</code>, <code>SPÖ</code>, <code>FPÖ</code>,
                            <code>GRÜNE</code>, <code>NEOS</code>, <code>BZÖ</code>, <code>STRONACH</code>, <code>PILZ</code> (Liste Pilz/JETZT),
                            <code>Ohne Klub</code>. Bei Personen, die ohne Parteizugehörigkeit und vorheriges Nationalratsmandat zu
                            Regierungsmitgliedern ernannt wurden, ist diese Liste leer. Das ist z.B. bei den Regierungsmitgliedern der
                            <a class="text-blue-400" href="https://de.wikipedia.org/wiki/Bundesregierung_Bierlein">Bundesregierung Bierlein</a> der
                            Fall, oder auch bei parteilosen MinisterInnen, die von einer Partei nominiert wurden, wie z.B. Mag. Dr. Martin Kocher.
                        </li>
                        <li>
                            <b>periods</b>: Legislaturperioden während derer die Person Abgeordnete(r) im Parlament war. Bei Personen ohne Mandat ist
                            diese Liste leer. Nähere Informationen zu den Legislaturperioden finden sich auf
                            <a class="text-blue-400" href="https://de.wikipedia.org/wiki/Nationalrat_(%C3%96sterreich)#Gesetzgebungsperioden"
                                >Wikipedia</a
                            >. Stenographische Protokolle sind in diesem Datensatz ab Periode XXII verfügbar.
                        </li>
                        <li>
                            <b>url</b>: die URL zum Personeintrag auf der Parlamentsseite. Diese URL kann auch über die ID der Person rekonstruiert
                            werden, z.B. <code>3612</code> -> <code>https://parlament.gv.at/person/3612</code>
                        </li>
                        <li>
                            <b>imageUrl</b>: optional, die URL zum Bild der Person auf der Parlamentsseite. So kein Bild vorhanden ist, fehlt dieses
                            Feld.
                        </li>
                    </ul>

                    <h2>Sitzungs Daten</h2>
                    <p class="italic text-sm">
                        <span class="font-semibold">ACHTUNG</span>: Protokolle für Sitzungen ab dem 24.5.2023 sind in diesem Datensatz noch nicht
                        enthalten, da es sich um vorläufige Protokolle handelt. Mehr Informationen in diesem
                        <a class="text-blue-400" href="https://twitter.com/OeParl/status/1757021460227313695">Tweet</a> des Österreichischen
                        Parlaments.
                    </p>
                    <p>Der Sitzungs-Datensatz ist im JSON-Format unter folgendem Link verfügbar:</p>
                    <a class="text-blue-400" href="/data/sessions.json">sessions.json (440MB)</a>
                    <p>Der Datensatz beinhaltet alle stenographischen Protokolle aller Nationalratssitzungen seit dem 20.12.2002.</p>
                    <p>Die JSON-Datei hat folgende Struktur:</p>

                    <pre><code>
${code(`
[
  {
    "uri": "https://parlament.gv.at/gegenstand/XXVII/NRSITZ/216",
    "period": "XXVII",
    "sessionNumber": 216,
    "sessionLabel": "216. Sitzung (216/NRSITZ)",
    "date": "2023-05-25T00:00:00",
    "protocolUrls": [
        "https://parlament.gv.at/dokument/XXVII/NRSITZ/216/fname_1598900.pdf",
        "https://parlament.gv.at/dokument/XXVII/NRSITZ/216/fnameorig_1598900.html"
    ],
    "sections": [
        ... SprecherInnen Sektionen ...
    ]
  },
  {
    "url": "https://parlament.gv.at/gegenstand/XXVII/NRSITZ/213",
    "period": "XXVII",
    "sessionNumber": 213,
    "sessionLabel": "213. Sitzung (213/NRSITZ)",
    "date": "2023-05-24T00:00:00",
    "protocolUrls": [],
    "sections": []
  },
  ... weitere Sitzungen ...
]`)}
                    </code></pre>
                    <p>Jeder Eintrag hat dabei folgende Felder:</p>
                    <ul class="px-4">
                        <li><b>url</b>: die URL zur Sitzung auf der Parlamentsseite.</li>
                        <li>
                            <b>period</b>: Die Legislaturperiode in der die Sitzung stattfand. Nähere Informationen zu den Legislaturperioden finden
                            sich auf
                            <a class="text-blue-400" href="https://de.wikipedia.org/wiki/Nationalrat_(%C3%96sterreich)#Gesetzgebungsperioden"
                                >Wikipedia</a
                            >.
                        </li>
                        <li><b>sessionNumber</b>: die Sitzungsnummer, beginnend bei 1 für jede Legislaturperiode.</li>
                        <li><b>sessionLabel</b>: die Bezeichnung der Sitzung.</li>
                        <li><b>date</b>: das Datum der Sitzung im ISO 8601 Format.</li>
                        <li>
                            <b>protocolUrls</b>: die URLs zu den Sitzungsprotokollen auf der Parlamentsseite. Sitzungsprotokolle werden als
                            <code>.html</code> als auch <code>.pdf</code> Dateien angeboten. Für Sitzungen, für die kein stenographisches Protokoll
                            verfügbar ist, ist diese Liste leer.
                        </li>
                        <li>
                            <b>sections</b>: eine chronologische Liste von SprecherInnen-Sektionen. Siehe unten für Details. Für Sitzungen, für die
                            kein stenographisches Protokoll verfügbar ist, ist diese Liste leer.
                        </li>
                    </ul>

                    <h2>SprecherInnen Sektionen</h2>
                    <p>
                        Jede Sitzung, für die ein stenographisches Protokoll existiert, hat eine oder mehrere SpecherInnen-Sektionen. Diese sind für
                        eine Sitzung in chronologischer Reihenfolge im Feld <code>sections</code> abgelegt.
                    </p>
                    <p>Eine SprecherInnen-Sektion in der <code>sections</code> Liste hat folgende Struktur:</p>

                    <pre><code>
${code(`
{
  "speaker": "88386",
  "text": "Da die Anträge ordnungsgemäß eingebracht sind, darf ich die Schriftführer ersuchen, die Anträge zu verlesen. Das ist an und für sich ein normaler Vorgang. Ich darf dementsprechend Frau Abgeordnete Steinacker ersuchen, den Antrag 3373/A, und Abgeordneten Zanger, den Antrag 3374/A vom Berichterstatterpult aus zu verlesen.– Bitte. (Abg. Martin Graf: Das war ein Schallmeiner-Schurkenstück! – Abg. Schallmeiner: ... kennt sich der Herr Graf aus, mit den Schurkenstücken! – Unruhe im Saal. – Der Präsident gibt das Glockenzeichen.)",
  "callouts": [
    {
      "caller": "2834",
      "text": "Das war ein Schallmeiner-Schurkenstück!"
    },
    {
      "caller": "5676",
      "text": "... kennt sich der Herr Graf aus, mit den Schurkenstücken!"
    },
    {
      "text": "Unruhe im Saal."
    },
    {
      "text": "Der Präsident gibt das Glockenzeichen."
    }
  ],
  "links": [
    {
      "label": "3373/A",
      "url": "https://parlament.gv.at/PAKT/VHG/XXVII/A/A_03373/index.shtml"
    },
    {
      "label": "3374/A",
      "url": "https://parlament.gv.at/PAKT/VHG/XXVII/A/A_03374/index.shtml"
    }
  ]
}
`)}
                    </code></pre>
                    <p>Eine SprecherInnen-Sektion hat dabei folgende Felder:</p>
                    <ul class="px-4">
                        <li>
                            <b>speaker</b>: Die Parlaments-ID der Person, die spricht. Mit dieser ID können die Details zur Person im
                            Personen-Datensatz gefunden werden (vgl. oben).
                        </li>
                        <li><b>text</b>: Das Transkript der Rede der Person, inklusive Zwischenrufen und Beschreibungen der Situation im Plenum.</li>
                        <li>
                            <b>callouts</b>: Eine Liste von Zwischenrufen und Situationsbeschreibungen. Bei einem Zwischenruf gibt das Feld
                            <code>caller</code> die Parlaments-ID der Person, die den Zwischenruf getätigt hat, an. Bei Situationsbeschreibungen fehlt
                            dieses Feld. Das Feld <code>text</code> gibt das Transkript des Zwischenrufes oder die Situationsbeschreibung wieder.
                        </li>
                        <li>
                            <b>links</b>: Eine Liste an Links, die im stenographischen Protokoll in dieser SprecherInnen-Sektion gefunden wurden. Das
                            Feld <code>label</code> gibt den Text des Links wieder, das Feld <code>url</code> den Link selbst.
                        </li>
                    </ul>

                    <h2>Datenerhebung und Qualität</h2>
                    <h3>Personen Datensatz</h3>
                    <p>
                        Als Basis des transformierten Datensatzes dient die
                        <a
                            class="text-blue-400"
                            href="https://www.parlament.gv.at/recherchieren/open-data/daten-und-lizenz/parlamentarierinnen/index.html"
                            >Open Data API des Parlaments für ParlamentarierInnen ab 1918</a
                        >. Über diese API werden die ParlamentarierInnen für die untersuchten Legislaturperioden ab 20.12.2002 extrahiert. Die von der
                        API returnierten Daten beinhalten den Namen der Person, die Legislaturperioden in denen die Person im Plenum teilgenommen hat,
                        sowie rudimentäre und uneinheitlich kodierte Information über die Klubzugehörigkeit der Person. Aus diesen Daten werden die
                        Legislaturperiodeninformation sowie Klubzugehörigkeit verwendet, wobei letzteres normiert wird (vgl. Feld
                        <code>parties</code> im Personen Datensatz oben).
                    </p>
                    <p>
                        In einem zweiten Schritt werden für jede Person die Detaildaten per JSON API abgerufen, z.B.
                        <a class="text-blue-400" href="https://www.parlament.gv.at/person/18140?json=true"
                            >https://www.parlament.gv.at/person/18140?json=true</a
                        >. Aus diesen Daten werden die normierten Namen der Personen verwendet. Weiters wird in diesen Daten nach weiteren Hinweisen
                        zur Parteizugehörigkeit gesucht. So befinden sich in den Biographie-Daten meist Parteinamen, die auf eine Parteizugehörigkeit
                        hinweisen. Auch werden aus diesen Daten die URLs der Bilder für jede Person extrahiert.
                    </p>
                    <p>
                        Der transformierte Datensatz wurde stichprobenartig überprüft, um die Extraktions-Pipeline zu validieren. Es wurden aus den
                        insgesamt 681 Personen des Datensatzes 10% randomisiert ausgewählt und mit den Rohdaten verglichen.
                    </p>
                    <p>
                        Die Zuweisung der Personen-ID an eine Person ist immer korrekt, da die IDs eindeutig in den Rohdaten ausgewiesen sind.
                        Entsprechend sind auch die URLs der Seiten zu Personen auf der Parlamentsseite, sowie die Bild URLs immer korrekt.
                    </p>
                    <p>Die Extraktion des Namens einer Person war in allen geprüften Fällen (68) korrekt.</p>
                    <p>Die Extraktion der Klub- bzw. Parteizugehörigkeit war in allen Fällen (68) korrekt.</p>
                    <p>Die Extraktion der Legislaturperioden, in denen die Person im Parlament vertreten war, war in allen Fällen (68) korrekt.</p>
                    <p>
                        Der Code zur Extraktion personenbezogener Daten ist in der Datei
                        <a class="text-blue-400" href="https://github.com/badlogic/woswormeileistung/blob/main/src/server/persons.ts">persons.ts</a>
                        auf GitHub zu finden.
                    </p>

                    <h3>Sitzungs Datensatz</h3>
                    <p>
                        Als Basis des transformierten Datensatzes dienen die im HTML-Format abgespeicherten stenographischen Protokolle von der
                        Parlamentsseite. Die rohen HTML-Dateien werden dabei mit einem einfachen Algorithmus heuristisch geparst, um
                        SprecherInnen-Sektionen zu extrahieren.
                    </p>
                    <p>
                        Diese rohen HTML-Dateien wurden von den Erstellern aus Microsoft Word exportiert. Leider sind diese HTML-Exporte von minderer
                        Qualität und kein valides HTML, ein bekanntes Problem von Microsoft Word. Dies kann zur Folge haben, dass die Extraktion der
                        SprecherInnen-Sektionen nicht 100% korrekt ist. Auch die Verknüpfung von Zwischenrufen mit Personen kann fehlschlagen.
                    </p>

                    <p>
                        Der transformierte Datensatz wurde daher stichprobenartig überprüft, um die Extraktions-Pipeline zu validieren. Es wurden pro
                        Legislaturperiode jeweils 4 Sitzungen mit stenographischem Protokoll ausgewählt und manuell mit den Rohdaten der
                        Parlamentsseite verglichen. Dabei wurden für jede Sitzung jeweils 20 SprecherInnen-Sektionen, verteilt über das ganze
                        Protokoll, verglichen.
                    </p>
                    <p>
                        Die Zuweisung der Personen-ID an eine SprecherInnen-Sektion ist immer korrekt, da die IDs eindeutig in den Rohdaten
                        ausgewiesen sind.
                    </p>
                    <p>Die Extraktionen des Transkripts einer SprecherInnen-Sektion war in allen geprüften Fällen (480) korrekt.</p>
                    <p>
                        Die Extraktion von Zwischenrufen und die Zuweisung der dazugehörigen Personen-IDs war in allen geprüften Fällen (480) korrekt.
                    </p>
                    <p>
                        Die Extraktion von Situationsbeschreibungen wies stellenweise Fehler auf. Z.B. werden in den Rohdaten manche Phrasen, bei
                        denen es sich nicht um Situationsbeschreibungen handelt, gleich markiert wie Situationsbeschreibungen, z.B.
                        <code>zur Geschäftsbehandlung</code>. Diese Fehler können maschinell nicht, oder nur mit erheblichem Aufwand bereinigt werden.
                        Da es sich bei Situationsbeschreibungen um nicht-kritische Daten handelt, wurde hier keine weitere Zeit investiert, um diese
                        Fehler bestmöglichst zu bereinigen.
                    </p>

                    <p>
                        Der Code zur Extraktion der Sitzungen ist in der Datei
                        <a class="text-blue-400" href="https://github.com/badlogic/woswormeileistung/blob/main/src/server/sessions.ts">sessions.ts</a>
                        auf GitHub zu finden.
                    </p>

                    <h2>Open Source</h2>
                    <p>
                        Zur Reproduzierbarkeit ist der gesamte Code für dieses Projekt auf
                        <a class="text-blue-400" href="https://github.com/badlogic/woswormeileistung/tree/main">GitHub</a> verfügbar. Der Code ist
                        unter der BSD-2-Clause Lizenz lizensiert und damit frei für kommerzielle als auch nicht-kommerzielle Projekte verwendbar.
                    </p>

                    <h2>API</h2>
                    <p>To be defined</p>
                    <h2>Zitat</h2>
                    <pre><code>
@software{zechner2024wwml,
    title={Wos wor mei Leistung? - Ein Datenprojekt basierend auf den stenographischen Protokollen aller Sitzungen des Österreichischen Parlaments ab dem 20.12.2002},
    author={Mario Zechner},
    year={2024},
    url={https://woswormeileistung.marioslab.io},
    note={License: CC BY 4.0}
}
                    </code></pre>
                </div>

                <page-footer></page-footer>
            </div>
        </div>`;
    }
}
