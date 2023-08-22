let convidados = require("../src/bancodedados")

// no Insominia: http://localhost:3000/convidados
// no body- JSON e {"nome": "Renata"}
const cadastrarConvidados = (req, res) => {
    const nome = req.body

    const convidadoDuplicado = convidados.find((convidado) => {
        return convidado === req.body.nome
    })

    if (convidadoDuplicado) {
        return res.status(200).json({
            mensagem: `O nome do convidado a ser adicionado já existe na lista.
            Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.`})
    }

    convidados.push(nome)

    return res.status(201).json({ mensagem: `Convidado adicionado` })
}

//no Insominia: http://localhost:3000/convidados
const listagemConvidados = (req, res) => {
    const nomeEncontrado = convidados.find((convidado) => {
        return convidado === req.query.nome
    })
    if (!nomeEncontrado) {
        return res.status(200).json(convidados)
    }
    return res.status(200).json(nomeEncontrado)
}

//no Insominia: http://localhost:3000/convidados/Carlos
const procurarConvidado = (req, res) => {
    //const { nome } = req.params

    const nomeEncontrado = convidados.find((convidado) => {
        return convidado.nome === req.params.nome
    })

    if (!nomeEncontrado) {
        return res.status(200).json(`mensagem: O convidado buscado não está presente na lista.`)
    } else {
        return res.status(200).json(`mensagem: Convidado Presente`)
    }

}

//no Insominia: http://localhost:3000/convidados/Roberto
const deletarConvidado = (req, res) => {

    const convidado = convidados.find((convidado) => {
        return convidado === req.params.nome
    })

    if (!convidado) {
        return res.status(404).json({ mensagem: `Convidado não encontrado` })
    }

    convidados = convidados.filter((convidado) => {
        return convidado !== req.params.nome
    })

    return res.status(200).json(convidados)
}

module.exports = {
    cadastrarConvidados,
    listagemConvidados,
    procurarConvidado,
    deletarConvidado
}
