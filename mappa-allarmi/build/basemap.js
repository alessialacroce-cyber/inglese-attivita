// Genera la base cartografica (path SVG già proiettati) e le coordinate x/y degli episodi.
// Uso: NODE_PATH=<cartella con world-atlas, topojson-client, d3-geo> node basemap.js > basemap.json
const topo = require("topojson-client");
const d3 = require("d3-geo");
const world = require("world-atlas/countries-50m.json");
const { EVENTI } = require("../eventi.js");

const W = 1000, H = 860;
const countries = topo.feature(world, world.objects.countries);
const box = {
  type: "Feature",
  geometry: { type: "MultiPoint", coordinates: [[-11, 35], [40, 35], [-11, 66], [40, 66], [14, 71], [14, 34.5]] }
};
const proj = d3.geoConicConformal().rotate([-14, 0]).parallels([38, 62]).fitExtent([[10, 10], [W - 10, H - 10]], box);
proj.clipExtent([[-20, -20], [W + 20, H + 20]]);
const path = d3.geoPath(proj);

const round = (s) => s.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1));
const paesi = [];
for (const f of countries.features) {
  const d = path(f);
  if (!d) continue;
  const b = path.bounds(f);
  if (b[1][0] < 0 || b[0][0] > W || b[1][1] < 0 || b[0][1] > H) continue;
  paesi.push({ n: f.properties.name, d: round(d) });
}
const sfera = round(path({ type: "Sphere" }) || "");
const pos = {};
for (const e of EVENTI) {
  const [x, y] = proj([e.lon, e.lat]);
  pos[e.id] = [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}
process.stdout.write(JSON.stringify({ W, H, paesi, pos }));
