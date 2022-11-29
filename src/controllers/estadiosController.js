import estadios from "../models/Estadio.js";

class EstadioController {

   static listarEstadios = (req, res) => {
    estadios.find((err, estadios) => {
        res.status(200).json(estadios)
    })
   }

   static listarEstadioPorId = (req, res) => {
    const id = req.params.id;

    estadios.findById(id, (err, estadios) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Id do estadio nao localizado`})
        } else {
            res.status(200).send(estadios);
        }
    })
   }

   static cadastrarEstadio = (req, res) => {
       let estadio = new estadios(req.body);
    
       estadio.save((err) => {
    
           if(err) {
               res.status(500).send({message: `${err.message} - falha ao cadastrar estadio.`})
           } else {
               res.status(201).send(estadio.toJSON())
           }
       })
       }

   static atualizarEstadio = (req, res) => {
    const id = req.params.id;

    estadios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Estadio atualizado com sucesso'})
        }else {
            res.status(500).send({message: err.message})
        }
    })
   }
   
   static excluirEstadio = (req, res) => {
    const id = req.params.id;

    estadios.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Estadio removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
   }
}

export default EstadioController