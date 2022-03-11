const http2 = require('http2')

const client = http2.connect('http://localhost:80')

client.on('close', msg => { console.log('> once.close: ', msg) })
client.on('error', err => { console.error('> once.error: ', err) })
client.on('connect', msg => { console.log('> once.connect: ', msg) })

const req = client.request({ ':path': '/' })

req.setEncoding('utf8')

req.on('response', (responseHeaders, flags) => {
  console.log(`> req.on.response > status : ${responseHeaders[':status']}`)

  for (const name in responseHeaders) {
    console.log(`${name}: ${responseHeaders[name]}`)
  }
})

let data = ''
req.on('data', (chunk) => {
  console.log('req.on.data > istemci tarafına gelen chunk veri: %s ', chunk.toString().replace(/(\n)/gm, ''))
  data += chunk
})

req.on('end', () => {
  console.log('req.on.end > istek tamamlandığında bağlantı kapatılacak...')

  // chunk veriler her "on.data" içinde toplanarak sonuç data değişkeninde son halini aldı
  console.log(`Sunucudan gelen verinin tamamı:\n${data}`)

  client.close(() => {
    console.log('> req.on.end > client.close  > bağlantı istemci tarafından kapatıldı')
  })
})

req.end()
