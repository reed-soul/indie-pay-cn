import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "site");
const dest = join(root, "dist");
const packSrc = join(root, "public", "pack");
const packDest = join(dest, "pack");

if (!existsSync(join(src, "index.html"))) {
  console.error("build: site/index.html is missing");
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log("build: wrote dist/ from site/");

if (!existsSync(packSrc)) {
  console.error("build: public/pack is missing");
  process.exit(1);
}

mkdirSync(packDest, { recursive: true });
cpSync(packSrc, packDest, { recursive: true });
console.log("build: wrote dist/pack/ from public/pack/");
