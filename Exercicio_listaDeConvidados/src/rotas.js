const express = require("express")
const { cadastrarConvidados, listagemConvidados, procurarConvidado, deletarConvidado } = require("../controladores/convidados.control")

const rotas = express()

rotas.get("/convidados", listagemConvidados)
rotas.post("/convidados", cadastrarConvidados)
rotas.get("/convidados/:nome", procurarConvidado)
rotas.delete("/convidados/:nome", deletarConvidado)


module.exports = rotas
