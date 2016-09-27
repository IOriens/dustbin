const http = require('http')
const querystring = require('querystring')



var result = []

var postData = querystring.stringify({
    'seed': '57e8d24b86b5987977928405'
})

var options = {
    hostname: 'hr.tuputech.com',
    port: 80,
    path: '/recruit/v2/tree?seed=57e8d24b86b5987977928405',
    method: 'GET'
}

var types = {}

function getType(type) {
    if(types[type] != null) {

    } else {
        return types[type]
    }
}

function trva(node, out) {
    for(var i in )

    if (node['type'] != null) {
        out.push()
    }
}

var req = http.request(options, res => {
    console.log(`STATUS: ${res.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
    res.setEncoding('utf-8')
    res.on('data', chunk => {
        result.push(Buffer.from(chunk))
    })
    res.on('end', () => {
        result = Buffer.concat(result).toString()
        console.info(JSON.parse(result).tree)
    })
})

req.on('error', e => {
    console.log(`problem with request: ${e.message}`)
})

req.write(postData)
req.end()