const mongoose = require('mongoose')


const Cliente = new mongoose.Schema({
    Nome: { type: String, required: true},
    Cpf: { type: Number, required: true},
    Etapa: { type:String, required: true}
})

mongoose.model('cliente', Cliente);

