import selecoes from "../models/Selecao.js";

class SelecaoController {

   static listarSelecoes = (req, res) => {
    selecoes.find((err, selecoes) => {
        res.status(200).json(selecoes)
    })
   }

   static listarSelecaoPorId = (req, res) => {
    const id = req.params.id;

    selecoes.findById(id, (err, selecoes) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Id da selecao nao localizado`})
        } else {
            res.status(200).send(selecoes);
        }
    })
   }

   static cadastrarSelecao = (req, res) => {
    let selecao = new selecoes(req.body);

    selecao.save((err) => {

        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar selecao.`})
        } else {
            res.status(201).send(selecao.toJSON())
        }
    })
   }

   static atualizarSelecao = (req, res) => {
    const id = req.params.id;

    selecoes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Estadio atualizado com sucesso'})
        }else {
            res.status(500).send({message: err.message})
        }
    })
   }

   static excluirSelecao = (req, res) => {
    const id = req.params.id;

    selecoes.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Selecao removida com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
   }
}

export default SelecaoController