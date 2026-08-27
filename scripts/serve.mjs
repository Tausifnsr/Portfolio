import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../dist/', import.meta.url))
const port = Number(process.env.PORT || 5173)
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
}

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname)
    const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
    let filePath = join(root, safePath)
    try {
      if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html')
    } catch {
      filePath = join(root, 'index.html')
    }
    const body = await readFile(filePath)
    response.writeHead(200, {
      'Content-Type': types[extname(filePath)] || 'application/octet-stream',
      'Cache-Control': filePath.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable',
    })
    response.end(body)
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(`Unable to serve portfolio: ${error.message}`)
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Portfolio ready at http://127.0.0.1:${port}`)
})
