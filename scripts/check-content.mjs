import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

// Transform and render without opening an HTTP listener or preview server.
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' })
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  const html = renderToStaticMarkup(createElement(App))
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length, 'IDs must be unique')
  for (const [, target] of html.matchAll(/href="#([^"]*)"/g)) {
    assert(target && ids.includes(target), `Missing anchor target: ${target}`)
  }
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1)
  assert.equal([...html.matchAll(/<details>/g)].length, 4)
  assert(html.includes('mailto:wael.melki@supcom.tn'))
  assert(!html.includes('href=""'))
  for (const [, asset] of readFileSync('dist/index.html', 'utf8').matchAll(/(?:src|href)="(\/[^"#]+)"/g)) {
    assert(existsSync(`dist${asset}`), `Missing built asset: ${asset}`)
  }
  const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8')
  for (const action of ['checkout', 'setup-node', 'configure-pages', 'upload-pages-artifact', 'deploy-pages']) {
    assert(workflow.includes(`actions/${action}@`))
  }
  assert(workflow.includes('npm ci') && workflow.includes('npm run build'))
  console.log(`PASS: ${ids.length} unique IDs, internal anchors, four case studies, contact, built assets and workflow action checks.`)
} finally { await vite.close() }
