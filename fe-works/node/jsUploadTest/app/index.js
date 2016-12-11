const koa = require('koa')

var app = koa()

app.use(function *(){
    this.body = "Helloworld"
})




app.listen(3000)