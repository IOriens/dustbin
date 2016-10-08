const koa = require('koa')

var app = koa()

app.use(function *(){
    this.body = "Helloworl"
})

app.listen(3000)