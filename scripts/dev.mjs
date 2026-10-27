import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const serveRoot = process.argv.includes("--dist")
  ? join(root, "dist")
  : join(root, "site");
const port = Number(process.env.PORT || 4173);

const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".png": "image/png",
};

function safeFile(urlPath) {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const requestPath = decoded.endsWith("/") ? `${decoded}index.html` : decoded;
  const abs = resolve(join(serveRoot, requestPath));
  const rel = relative(serveRoot, abs);
  if (rel.startsWith("..") || rel.startsWith(`..${sep}`)) return null;
  return abs;
}

if (!existsSync(serveRoot)) {
  console.error(`dev: ${serveRoot} does not exist. Run npm run build first if using --dist.`);
  process.exit(1);
}

const server = createServer((req, res) => {
  const file = safeFile(req.url || "/");
  if (!file) {
    res.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    res.end("bad path");
    return;
  }

  let target = file;
  if (existsSync(target) && statSync(target).isDirectory()) {
    target = join(target, "index.html");
  }

  if (!existsSync(target) || !statSync(target).isFile()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("not found");
    return;
  }

  const type = mime[extname(target).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "content-type": type,
    "cache-control": "no-store",
  });
  createReadStream(target).pipe(res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`dev: serving ${serveRoot} at http://127.0.0.1:${port}/`);
});
