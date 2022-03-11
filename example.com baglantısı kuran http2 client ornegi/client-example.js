// file: ./index.js

/*
const http2.connect(authority[, options][, listener])

> authority: It is the URL representing a remote HTTP/2 server to connect to.
> options: It can be maxDeflateDynamicTableSize, maxSettings, maxSessionMemory, etc option can be used according to need.
> listener: It is the one time listener of the ‘connect’ event.

Return Value: This method returns the object of the ClientHttp2Session instance.

Kaynak: https://www.geeksforgeeks.org/node-js-http2-connect-method/
*/
const http2 = require('http2')

// The `http2.connect` method creates a new session with example.com
const session = http2.connect('https://example.com')

/* eğer request olmazsa sadece bağlantı kurulmuş oluyor ama veri akışı yok
 * const req = session.request({ ':method': 'GET', ':path': '/' })
 * bu komutla istek yapılmış olur
 */

// If there is any error in connecting, log it to the console
session.on('error', (err) => console.error(err))
session.on('response', (err) => console.log(err))

session.once('connect', msg => { console.log('> once.connect: ', msg) })
session.once('error', err => { console.error('> once.error: ', err) })
session.once('close', msg => { console.log('> once.close: ', msg) })
session.close(() => {
    console.log('> on.close > client closed')
})
