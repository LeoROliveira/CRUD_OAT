import express from "express";
import selecoes from "./selecoesRoutes.js";
import estadios from "./estadiosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Copa do Mundo 2022"})
    })

    app.use(
        express.json(),
        selecoes,
        estadios
    )
}

export default routes