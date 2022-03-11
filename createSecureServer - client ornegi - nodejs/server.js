const http2 = require('http2')
const fs = require('fs')

// Creating and initializing server by using http2.createServer() method
const server = http2.createSecureServer({
  key: fs.readFileSync('./localhost-privkey.pem'),
  cert: fs.readFileSync('./localhost-cert.pem')
})
server.on('error', (err) => console.error(err))

server.on('stream', (stream, headers) => {
  console.log('...İstek geldi...', headers)

  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  })
  stream.end('<h1>Hello World</h1>')

  // Stopping the server by using the close() method
  // server.close(() => {
  //   console.log('server closed')
  // })
})

server.listen(8443)
