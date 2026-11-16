// Reemplaza __SITE_URL__ por la URL pública real del deploy (las imágenes
// de WhatsApp/redes necesitan URL absoluta). Corre solo en Vercel (buildCommand).
// Para un dominio propio: variable de entorno SITE_URL=https://tudominio.com
const fs = require("fs");
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const url = (process.env.SITE_URL || (host ? "https://" + host : "")).replace(/\/+$/, "");
if (!url) { console.log("build.js: sin URL, se deja __SITE_URL__ (build local)"); process.exit(0); }
const f = "index.html";
fs.writeFileSync(f, fs.readFileSync(f, "utf8").split("__SITE_URL__").join(url));
console.log("build.js: SITE_URL =", url);
