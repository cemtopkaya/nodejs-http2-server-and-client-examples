// file: ./server.js

const router = require('./router')

const http2 = require('http2')

// create a new server instance
const server = http2.createServer()

// log any error that occurs when running the server
server.on('error', (err) => console.error(err))

// the 'stream' callback is called when a new
// stream is created. Or in other words, every time a
// new request is received
server.on('stream', (stream, headers) => {
  // we can use the `respond` method to send
  // any headers. Here, we send the status pseudo header
  stream.respond({
    ':status': 200
  })

  // response streams are also stream objects, so we can
  // use `write` to send data, and `end` once we're done
  const cevap = 'Hello World!'
  stream.write(`${cevap}`)
  stream.end()
})

// start the server on port 8000
server.listen(8000)

server.on('stream', router)
server.on('request', (msg) => {
  console.log('> on.request > msg: ', msg)
})
server.on('sessionError', (err) => {
  console.log('> on.sessionError > err: ', err)
})
