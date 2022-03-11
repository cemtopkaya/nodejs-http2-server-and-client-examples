const http2 = require('http2')

// Create an unencrypted HTTP/2 server.
// Since there are no browsers known that support
// unencrypted HTTP/2, the use of `http2.createSecureServer()`
// is necessary when communicating with browser clients.
const server = http2.createServer()

server.on('stream', (stream, headers) => {
  console.log('...İstek geldi...', headers)

  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  })
  stream.end('<h1>Hello World</h1>')
})

server.listen(80)
