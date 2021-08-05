const http = require("http");
const express = require("express");
const mongoose = require('mongoose');


/* MODEL */
require('models/Cliente')
const Cliente = mongoose.model('cliente');
const app = express();



/* BANCO DE DADOS */
mongoose.connect('mongodb://localhost/teste', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log('Mongo Ok');
}).catch((err)=>{console.log('Mongo não conectado');
})


/* ROTAS */
app.get("/", (req, res) => {
    Cliente.findOne({}).then((cliente)=>{
        return res.json(cliente);
    })});

app.post("/cliente", (req, res)=>{
    const cliente = Cliente.create(req.body)
});




http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));