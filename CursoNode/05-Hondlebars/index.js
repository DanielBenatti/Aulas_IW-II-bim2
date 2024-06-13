const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
    //template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //conexão Banco de Dados
    const sequelize = new Sequelize('test','root','',{
        host: "localhost",
        dialect: 'mysql'
    })

//rotas
app.get('/cadastro',function(req,res){
    res.render('formulario')
})

app.post('/add',function(req,res){
    res.send('formulario enviado')
})

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})