import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const contactUrls = [
  "https://t.me/Nfrtum",
  "https://wa.me/qr/QME4Q3PSIIAJF1",
  "https://max.ru/u/f9LHodD0cOLAjqkoKX8pl9Hv4TiIWUYnNJDe6ZqmUyAtlSqjYCbKffk9API",
  "mailto:info@4vdata.ru",
];
const profilePhotoHash = "594A32D335A7E0A1E3DEFD3BAE2F370C99EA4D93AF4F7BD59EE4EA9EDC8DFF5D";
const sha256 = (contents) => createHash("sha256").update(contents).digest("hex").toUpperCase();

test("renders the Avtarkia home page with every contact method", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Avtarkia — индивидуальная аналитика для бизнеса<\/title>/i);
  assert.match(html, /<h1>Индивидуальная аналитика для бизнеса<\/h1>/i);
  assert.match(html, /href="o-kompanii\/"[^>]*>О компании<\/a>/i);
  for (const url of contactUrls) assert.ok(html.includes(`href="${url}"`));
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});

test("renders the about page with the expert profile and source photo", async () => {
  const response = await render("/o-kompanii");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>О компании Avtarkia и эксперте Руслане Гайфутдинове<\/title>/i);
  assert.match(html, /Руслан Гайфутдинов, FCCA/i);
  assert.match(html, /class="hero"/i);
  assert.match(html, /class="section contact"/i);
  assert.doesNotMatch(html, /class="[^"]*about-/i);
  assert.match(html, /src="\.\.\/assets\/ruslan-gayfutdinov\.png" width="1150" height="2560"/i);
  assert.match(html, /profi\.ru\/profile\/GayfutdinovRV/i);
  assert.match(html, /linkedin\.com\/in\/ruslan-gaifutdinov-fcca-670609101/i);
  assert.match(html, /rel="canonical" href="https:\/\/fiorentinorosso\.github\.io\/avtarkia\/o-kompanii\/"/i);
  assert.match(html, /"@type":"ProfilePage"/i);
  for (const url of contactUrls) assert.ok(html.includes(`href="${url}"`));

  const photo = await readFile(new URL("../public/assets/ruslan-gayfutdinov.png", import.meta.url));
  assert.equal(sha256(photo), profilePhotoHash);
});

test("keeps the GitHub Pages export self-contained", async () => {
  const [home, about, css, photo] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/o-kompanii/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/assets/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/assets/ruslan-gayfutdinov.png", import.meta.url)),
  ]);

  assert.match(home, /href="o-kompanii\/"/i);
  assert.match(about, /src="\.\.\/assets\/ruslan-gayfutdinov\.png"/i);
  assert.match(about, /type="application\/ld\+json"/i);
  assert.match(about, /"@type":"ProfilePage"/i);
  assert.match(css, /\.hero\b/);
  assert.equal(sha256(photo), profilePhotoHash);
  assert.doesNotMatch(`${home}${about}`, /__VINEXT|localhost:3000|\uFFFD/i);
  assert.doesNotMatch(home, /<script\b/i);
});
