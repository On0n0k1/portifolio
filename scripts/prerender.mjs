// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// Renders <App /> to an HTML string and injects it into dist/index.html so
// bots that only issue a GET — no JS execution — see the real page content
// instead of an empty <div id="root">.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const distIndex = `${root}dist/index.html`
const ssrEntry = `${root}dist-ssr/entry-server.js`

const { render } = await import(ssrEntry)
const appHtml = render()

const template = await readFile(distIndex, 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: expected empty <div id="root"></div> placeholder in dist/index.html')
}
const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

await writeFile(distIndex, finalHtml)
await rm(`${root}dist-ssr`, { recursive: true, force: true })

console.log('Prerendered content injected into dist/index.html')
