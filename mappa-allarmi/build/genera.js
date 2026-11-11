// Genera mappa.html (interattiva) e report.html (statico) a partire da eventi.js e basemap.json.
// Uso: node genera.js   (basemap.json deve esistere: vedi basemap.js)
const fs = require("fs");
const path = require("path");
const { EVENTI, CATEGORIE, ESITI, AGGREGATI } = require("../eventi.js");
const BASE = require("./basemap.json");
const OUT = path.join(__dirname, "..");

// ---------- Mappa interattiva ----------
const data = `const EVENTI = ${JSON.stringify(EVENTI)};\nconst CATEGORIE = ${JSON.stringify(CATEGORIE)};\nconst ESITI = ${JSON.stringify(ESITI)};\nconst BASE = ${JSON.stringify({ paesi: BASE.paesi, pos: BASE.pos })};`;
const tpl = fs.readFileSync(path.join(__dirname, "mappa.template.html"), "utf8");
fs.writeFileSync(path.join(OUT, "mappa.html"), tpl.replace("/*__DATA__*/", data));

// ---------- Report statico ----------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cats = Object.keys(CATEGORIE);
const MESI = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
const fmt = (iso) => { const [, m, d] = iso.split("-"); return `${+d} ${MESI[+m - 1]}`; };
const label = (e) => e.data_label || fmt(e.data);

function shape(cat, r, extra = "") {
  const f = `fill="var(--c-${cat})"`;
  if (cat === "aereo") return `<path d="M0,${-r * 1.2}L${r * 1.1},${r * 0.8}L${-r * 1.1},${r * 0.8}Z" ${f} ${extra}/>`;
  if (cat === "scuola") return `<rect x="${-r * 0.9}" y="${-r * 0.9}" width="${r * 1.8}" height="${r * 1.8}" ${f} ${extra}/>`;
  if (cat === "supermercato") return `<path d="M0,${-r * 1.25}L${r * 1.25},0L0,${r * 1.25}L${-r * 1.25},0Z" ${f} ${extra}/>`;
  return `<circle r="${r}" ${f} ${extra}/>`;
}
const icon = (cat, s = 14) => `<svg width="${s}" height="${s}" viewBox="-8 -8 16 16" aria-hidden="true">${shape(cat, 5.5)}</svg>`;

// mappa statica: Europa + riquadro Italia
function mapSvg(vb, r, ids) {
  const groups = {};
  const evs = EVENTI.filter((e) => !ids || ids.includes(e.cat));
  for (const e of evs) { const [x, y] = BASE.pos[e.id]; const k = Math.round(x / (r * 1.1)) + ":" + Math.round(y / (r * 1.1)); (groups[k] = groups[k] || []).push(e); }
  let marks = "";
  for (const g of Object.values(groups)) g.forEach((e, i) => {
    const [x, y] = BASE.pos[e.id];
    const a = (i / g.length) * Math.PI * 2 - Math.PI / 2, d = g.length > 1 ? r * 1.25 : 0;
    const extra = e.approx ? `class="ap"` : `class="ex"`;
    marks += `<g transform="translate(${(x + Math.cos(a) * d).toFixed(1)},${(y + Math.sin(a) * d).toFixed(1)})">${shape(e.cat, r, extra)}</g>`;
  });
  return `<svg viewBox="${vb}" role="img" aria-label="Mappa degli episodi"><rect x="-50" y="-50" width="1100" height="960" class="sea"/><g class="land">${BASE.paesi.map((p) => `<path d="${p.d}"/>`).join("")}</g>${marks}</svg>`;
}

// grafico per giorno
function dayChart() {
  const days = []; for (let d = 2; d <= 11; d++) days.push(`2026-11-${String(d).padStart(2, "0")}`);
  const W = 640, H = 220, L = 30, B = 28, T = 12, bw = (W - L - 10) / days.length;
  const counts = days.map((d) => cats.map((c) => EVENTI.filter((e) => e.data === d && e.cat === c).length));
  const max = Math.max(...counts.map((c) => c.reduce((a, b) => a + b, 0)));
  const top = Math.ceil(max / 4) * 4;
  const y = (v) => H - B - (v / top) * (H - B - T);
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Episodi per giorno e tipo">`;
  for (let v = 0; v <= top; v += top / 4) s += `<line x1="${L}" x2="${W - 10}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${L - 6}" y="${y(v) + 4}" class="ax" text-anchor="end">${v}</text>`;
  days.forEach((d, i) => {
    let acc = 0; const x = L + i * bw + bw * 0.18, w = bw * 0.64;
    cats.forEach((c, j) => { const v = counts[i][j]; if (!v) return; s += `<rect x="${x.toFixed(1)}" y="${y(acc + v).toFixed(1)}" width="${w.toFixed(1)}" height="${(y(acc) - y(acc + v)).toFixed(1)}" fill="var(--c-${c})" class="bar"/>`; acc += v; });
    if (acc) s += `<text x="${(x + w / 2).toFixed(1)}" y="${y(acc) - 5}" class="val" text-anchor="middle">${acc}</text>`;
    s += `<text x="${(x + w / 2).toFixed(1)}" y="${H - 9}" class="ax" text-anchor="middle">${fmt(d)}</text>`;
  });
  return s + `</svg>`;
}

const byCat = (c) => EVENTI.filter((e) => e.cat === c).sort((a, b) => a.data.localeCompare(b.data));
const paesiN = new Set(EVENTI.map((e) => e.paese)).size;
const it = EVENTI.filter((e) => e.paese === "Italia").length;

const sezioni = cats.map((c, i) => {
  const ag = AGGREGATI.find((a) => a.cat === c);
  const rows = byCat(c).map((e) => `
      <tr>
        <td class="dt">${esc(label(e))}</td>
        <td><b>${esc(e.titolo)}</b><div class="lw">${esc(e.luogo)} · ${esc(e.paese)}${e.approx ? ' <span class="tag">posizione indicativa</span>' : ""}</div><div class="det">${esc(e.dettaglio)}</div></td>
        <td class="es"><span class="tag es-${e.esito}">${esc(ESITI[e.esito])}</span></td>
        <td class="fo">${e.fonti.map((f) => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.nome)}</a>`).join("<br>")}</td>
      </tr>`).join("");
  return `
  <section class="cat-sec" id="sez-${c}">
    <h2>${icon(c, 18)} ${i + 1}. ${esc(CATEGORIE[c].nome)}</h2>
    <p class="agg"><span class="big" style="color:var(--c-${c})">${esc(ag.valore)}</span> ${esc(ag.testo)}</p>
    <div class="tw"><table>
      <thead><tr><th>Data</th><th>Episodio</th><th>Esito</th><th>Fonti</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </section>`;
}).join("");

const report = `<title>Report allarmi novembre 2026</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
/* Layout: dossier a colonna singola, larghezza da documento; tabelle scorrevoli su mobile. */
:root {
  --bg: #f4f6f8; --paper: #ffffff; --fg: #121820; --muted: #5a6573; --line: #d5dbe2;
  --sea: #e3eaf1; --land: #fbfcfd; --border: #b8c2cd;
  --c-aereo: #2563c9; --c-scuola: #c27a00; --c-supermercato: #148a68; --c-ospedale: #cc2f45;
  --f-display: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --f-body: "IBM Plex Sans", "Segoe UI", system-ui, sans-serif;
  --f-mono: "IBM Plex Mono", ui-monospace, Menlo, monospace;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg: #0f1419; --paper: #161d24; --fg: #e6ebf0; --muted: #94a0ad; --line: #2a343e;
  --sea: #111a22; --land: #222c36; --border: #3d4955;
  --c-aereo: #6aa0ff; --c-scuola: #f0ad3c; --c-supermercato: #3fc99d; --c-ospedale: #ff6b7f; color-scheme: dark; } }
:root[data-theme="dark"] {
  --bg: #0f1419; --paper: #161d24; --fg: #e6ebf0; --muted: #94a0ad; --line: #2a343e;
  --sea: #111a22; --land: #222c36; --border: #3d4955;
  --c-aereo: #6aa0ff; --c-scuola: #f0ad3c; --c-supermercato: #3fc99d; --c-ospedale: #ff6b7f; color-scheme: dark; }
* { box-sizing: border-box; }
body { background: var(--bg); color: var(--fg); font-family: var(--f-body); font-size: 15px; line-height: 1.55;
  padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); padding-block: 24px 40px; }
.doc { max-width: 980px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: clamp(20px, 4vw, 48px); display: grid; gap: 30px; }
.doc > * { min-width: 0; }
.kicker { font-family: var(--f-mono); font-size: 12px; color: var(--muted); letter-spacing: 0.04em; display: flex; flex-wrap: wrap; gap: 6px 18px; border-bottom: 1px solid var(--line); padding-bottom: 12px; }
h1 { font-family: var(--f-display); font-weight: 800; font-size: clamp(26px, 4vw, 38px); line-height: 1.1; margin: 0 0 10px; letter-spacing: -0.015em; text-wrap: balance; }
h2 { font-family: var(--f-display); font-weight: 700; font-size: 21px; margin: 0 0 10px; display: flex; gap: 10px; align-items: center; text-wrap: balance; }
h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin: 0 0 8px; font-weight: 600; }
p { margin: 0 0 10px; max-width: 72ch; }
.lead { font-size: 17px; }
ul.key { margin: 0; padding-left: 20px; display: grid; gap: 6px; max-width: 80ch; }
.tiles { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.tile { padding: 14px 16px; border-left: 1px solid var(--line); display: grid; gap: 2px; align-content: start; }
.tile:first-child { border-left: 0; padding-left: 0; }
.tile .v { font-family: var(--f-display); font-weight: 800; font-size: 28px; font-variant-numeric: tabular-nums; }
.tile .k { display: flex; gap: 6px; align-items: center; font-size: 12.5px; font-weight: 600; }
.tile .s { font-size: 12px; color: var(--muted); }
.figs { display: grid; grid-template-columns: 1.35fr 1fr; gap: 18px; }
figure { margin: 0; display: grid; gap: 6px; }
figure svg { width: 100%; height: auto; display: block; border: 1px solid var(--line); border-radius: 3px; }
figcaption { font-size: 12px; color: var(--muted); }
.sea { fill: var(--sea); }
.land path { fill: var(--land); stroke: var(--border); stroke-width: 0.6; }
.ex { stroke: var(--paper); stroke-width: 1.2; }
.ap { fill-opacity: 0.55; stroke: var(--fg); stroke-width: 0.8; stroke-dasharray: 2.5 1.5; }
.chart svg { border: 0; }
.grid { stroke: var(--line); stroke-width: 1; }
.ax { font: 11px var(--f-mono); fill: var(--muted); }
.val { font: 600 11px var(--f-mono); fill: var(--fg); }
.legend { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 12.5px; }
.legend span { display: inline-flex; gap: 6px; align-items: center; }
.tw { overflow-x: auto; border-top: 2px solid var(--fg); }
table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 680px; }
th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted); font-weight: 600; padding: 8px 10px; border-bottom: 1px solid var(--line); }
td { padding: 10px; border-bottom: 1px solid var(--line); vertical-align: top; }
td.dt { font-family: var(--f-mono); font-size: 12.5px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.lw { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
.det { margin-top: 4px; }
td.fo { font-size: 12px; min-width: 150px; }
td.fo a { color: var(--fg); text-underline-offset: 3px; text-decoration-color: var(--border); }
.tag { display: inline-block; font-size: 11px; border: 1px solid var(--line); border-radius: 999px; padding: 1px 8px; white-space: nowrap; color: var(--fg); }
.es-armato { border-color: var(--c-ospedale); color: var(--c-ospedale); }
.es-cyber { border-color: var(--c-supermercato); color: var(--c-supermercato); }
.agg { display: flex; gap: 14px; align-items: baseline; max-width: 90ch; }
.agg .big { font-family: var(--f-display); font-weight: 800; font-size: 26px; white-space: nowrap; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.small { font-size: 13px; color: var(--muted); }
.small b { color: var(--fg); }
@media (max-width: 760px) {
  .tiles { grid-template-columns: 1fr 1fr; }
  .tile:nth-child(3) { border-left: 0; padding-left: 0; }
  .tile:nth-child(n+3) { border-top: 1px solid var(--line); }
  .figs, .cols { grid-template-columns: 1fr; }
  .agg { flex-direction: column; gap: 2px; }
}
</style>

<article class="doc">
  <div>
    <div class="kicker"><span>REPORT DI SITUAZIONE</span><span>Periodo: 2–11 novembre 2026</span><span>Chiuso l'11/11/2026, ore 17</span></div>
  </div>
  <header>
    <h1>Allarmi bomba e attacchi a infrastrutture civili in Europa</h1>
    <p class="lead">In dieci giorni l'Europa ha visto quattro ondate distinte: frigoriferi di supermercati e banche del sangue manomessi da remoto (1–2 novembre), falsi allarmi bomba su oltre trenta voli (2–6 novembre), email minatorie a migliaia di scuole (2 e 11 novembre). In Ucraina, due strutture sanitarie sono state colpite da attacchi armati il 3 novembre.</p>
  </header>

  <section>
    <h3>In sintesi</h3>
    <ul class="key">
      <li><b>Nessun ordigno trovato.</b> Tutti gli allarmi bomba su aerei e scuole verificati finora sono risultati falsi.</li>
      <li><b>Supermercati: attacchi informatici, non fisici.</b> Colpiti i sistemi di refrigerazione, spesso apparecchiature vecchie e non aggiornate, in almeno sette paesi, Italia compresa (Catania, Palermo, Napoli, Treviso, Gorizia, Isernia).</li>
      <li><b>Ospedali: nessun attacco in Italia.</b> In Francia la stessa tecnica ha colpito tre depositi di plasma dell'EFS senza perdite. Gli unici attacchi armati sono in Ucraina (Charkiv, Dnipro).</li>
      <li><b>Responsabili non identificati.</b> Le email alle scuole italiane e alle redazioni europee sono firmate "Mikhail Andropov". Per i supermercati ci sono rivendicazioni filorusse non verificate; la Francia ha puntato il dito sull'Iran. La Commissione UE ritiene presto per collegare gli episodi.</li>
    </ul>
  </section>

  <div class="tiles">
    ${cats.map((c) => { const ag = AGGREGATI.find((a) => a.cat === c); const n = byCat(c).length; return `<div class="tile"><span class="k">${icon(c)} ${esc(CATEGORIE[c].breve)}</span><span class="v">${esc(ag.valore)}</span><span class="s">${n} episodi mappati</span></div>`; }).join("")}
  </div>

  <div class="figs">
    <figure>
      ${mapSvg("0 0 1000 860", 7)}
      <figcaption>Fig. 1 · ${EVENTI.length} episodi georeferenziati in ${paesiN} paesi. Simboli tratteggiati: posizione indicativa (la fonte non indica il luogo esatto).</figcaption>
    </figure>
    <div style="display:grid;gap:18px;align-content:start;min-width:0">
      <figure>
        ${mapSvg("360 560 200 245", 3)}
        <figcaption>Fig. 2 · Dettaglio Italia: ${it} episodi.</figcaption>
      </figure>
      <div class="legend">${cats.map((c) => `<span>${icon(c)} ${esc(CATEGORIE[c].breve)}</span>`).join("")}</div>
    </div>
  </div>

  <figure class="chart">
    <h3>Episodi mappati per giorno</h3>
    ${dayChart()}
    <figcaption>Fig. 3 · Conteggio degli episodi geolocalizzati, non del totale di voli o scuole coinvolti. Il picco del 5 novembre corrisponde alla giornata con almeno 27 voli minacciati.</figcaption>
  </figure>

  ${sezioni}

  <section class="cols">
    <div>
      <h3>Metodo</h3>
      <p class="small">Episodi raccolti da agenzie (ANSA, Reuters, AP), testate nazionali e internazionali (Il Post, Sky TG24, Il Messaggero, Il Foglio, CNN, Al Jazeera, Irish Times, Washington Post), fonti istituzionali e ONG (Medici Senza Frontiere). Ogni episodio ha almeno una fonte. Per gli aerei il simbolo indica l'aeroporto di atterraggio o di controllo.</p>
    </div>
    <div>
      <h3>Limiti</h3>
      <p class="small"><b>Le cifre non coincidono tra fonti</b> (scuole: da 312 a 6.300; voli: 27–35). <b>Non tutto è mappato:</b> molte scuole e supermercati non sono nominati. I siti EFS francesi non sono stati resi noti. Il blackout di UZ Brussel del 10 novembre è incluso ma l'ospedale esclude un cyberattacco. Dati in evoluzione: verificare sulle fonti originali.</p>
    </div>
  </section>
</article>
`;
fs.writeFileSync(path.join(OUT, "report.html"), report);
console.log("ok", EVENTI.length, "eventi");
