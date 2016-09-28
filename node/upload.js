// const fs = require('fs')
// const http = require('http')
// const querystring = require('querystring')
// fs.readFile('./http.js', (err, data) => {
//     console.log('===========', data)

//     let uData = {
//         seed: '57e8d24b86b5987977928405',
//         name: '丁俊杰',
//         mobile: '15223358012',
//         uploadCodes: data
//     }
//     console.log(uData)
//     uData = querystring.stringify(uData)

//     let result = []
// let options = {
//     hostname: 'hr.tuputech.com',
//     port: 80,
//     path: '/recruit/v2/tree/file',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// }
//     let req = http.request(options, res => {

//         res.setEncoding('utf-8')
//         res.on('data', chunk => {
//             result.push(Buffer.from(chunk))
//         })
//         res.on('end', () => {
//             console.log(Buffer.concat(result).toString())
//             console.log('llllllll')
//         })
//     })




//     req.on('error', e => {
//         console.log(`problem with request: ${e.message}`)
//     })
//     req.write(uData)
//     req.end()
// })

const FormData = require('form-data')
const fs = require('fs')

var form = new FormData()
form.append('seed', '57e8d24b86b5987977928405')
form.append('name', '丁俊杰')
form.append('mobile', '15223358012')
form.append('uploadCodes', fs.createReadStream('./upload.js'))
form.submit({

    hostname: 'hr.tuputech.com',
    port: 80,
    path: '/recruit/v2/tree/file',
    method: 'POST'

}, (err, res)=> {
    console.info(res)
})