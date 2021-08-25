const express = require('express')
const app = express()
const db = require('./models/connection')
const bodyParser = require('body-parser')

const PORT = 8080

app.listen(PORT, function()
{
    console.log(`O Express está rodando na porta ${PORT}`)
})

//db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectou com Sucesso")
    })
    .catch(error => {
        console.log("Ocorreu um erro ao conectar", error)
    })

    app.use(bodyParser.urlencoded({extended: false}))

//rotes
app.get('/', (req,res) => {
    res.send("Está Funcionando")
})

app.use('/jobs', require('./routes/jobsRoutes'))