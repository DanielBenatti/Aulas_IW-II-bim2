const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Config
    //template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})