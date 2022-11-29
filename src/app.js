//require('dotenv').config()
import express from "express";
import db from "./config/dbConnect.js";
//import estadio from "./models/Estadio.js"
//import selecoes from "./models/Selecao.js";
import routes from "./routes/index.js"



db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();


app.use(express.json())

routes(app);

export default app

//const selecoes = [
//    {id: 1, "selecao": "Brasil", "continente": "America do Sul", "tecnico": "Tite"},
//    {id: 2, "selecao": "Portugal", "continente": "Europa", "tecnico": "Fernando Santos"}
//]

//const estadios = [
//    {id: 1, "estadio": "Al Thumama", "cidade": "Doha"},
//    {id: 2, "estadio": "Al Bayt", "cidade": "Al Khor"}
//]

// app.get('/', (req, res) => {
//     res.status(200).send('Copa do Mundo 2022')
// })

// CRUD Selecoes

//app.get('/selecoes', (req, res) => {
//    selecoes.find((err, selecoes) => {
//        res.status(200).json(selecoes)
//    })  
//})

// app.get('/selecoes/:id', (req, res) => {
//     let index = buscaSelecao(req.params.id)
//     res.json(selecoes[index])
// })

// app.post('/selecoes', (req, res) => {
//     selecoes.push(req.body);
//     res.status(201).send('Selecao cadastrada com sucesso')
// })

// app.put('/selecoes/:id', (req, res) => {
//     let index = buscaSelecao(req.params.id)
//     selecoes[index].selecao = req.body.selecao
//     res.json(selecoes)
// })

// function buscaSelecao(id) {
//     return selecoes.findIndex(selecao => selecao.id == id)
// }

// app.delete('/selecoes/:id', (req, res) => {
//     let {id} = req.params
//     let index = buscaSelecao(id)
//     selecoes.splice(index, 1)
//     res.send(`Selecao ${id} removida com sucesso`)
// })

// CRUD Estadios

//app.get('/estadios', (req, res) => {
//    estadios.find((err, estadios) => {
//        res.status(200).json(estadios)
//    })
//})

// app.get('/estadios/:id', (req, res) => {
//     let index = buscaEstadio(req.params.id)
//     res.json(estadios[index])
// })

// app.post('/estadios', (req, res) => {
//     estadios.push(req.body);
//     res.status(201).send('Estadio cadastrado com sucesso')
// })

// app.put('/estadios/:id', (req, res) => {
//     let index = buscaEstadio(req.params.id)
//     estadios[index].estadio = req.body.estadio
//     res.json(estadios)
// })

// function buscaEstadio(id) {
//     return estadios.findIndex(estadio => estadio.id == id)
// }

// app.delete('/estadios/:id', (req, res) => {
//     let {id} = req.params
//     let index = buscaEstadio(id)
//     estadios.splice(index, 1)
//     res.send(`Estadio ${id} removido com sucesso`)
// })