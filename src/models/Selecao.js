import mongoose from "mongoose";

const selecaoSchema = new mongoose.Schema(
    {
        id: {type: String},
        selecao: {type: String, required: true},
        continente: {type: String, required: true},
        tecnico: {type: String}
    }
);

const selecoes = mongoose.model('selecoes', selecaoSchema);

export default selecoes;