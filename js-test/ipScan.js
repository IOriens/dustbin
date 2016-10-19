const http = require('http')
var getAndCheck = (i,j) => {
  var req = http.get(`http://192.168.${i}.${j}`, response => {
    var body = []
    response.on('data', chunk => {
      body.push(chunk)
    })

    response.on('end', () => {
      body = Buffer.concat(body)
      console.log(`http://192.168.${i}.${j}`, 'done')
      console.log(body.toString().substring(0,99))
      if(body.toString().indexOf('miwifi') != -1) {
        console.log(ip,body.toString())
      }
    })

    response.on('error',e => {
      console.log(e)
    })
  }).on('error', e => {
    consoel.log('err',e)
  })

  req.setTimeout(5000, e => {

    req.end()
  })
}

for(var i = 1; i < 3; i ++) {
  for(var j = 1; j < 150; j ++) {
    getAndCheck(i,j)
  }
}
