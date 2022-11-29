import mongoose from "mongoose";

const estadioSchema = new mongoose.Schema(
    {
        id: {type: String},
        estadio: {type: String, required: true},
        cidade: {type: String, required: true},
    }
);

const estadios = mongoose.model('estadios', estadioSchema);

export default estadios;