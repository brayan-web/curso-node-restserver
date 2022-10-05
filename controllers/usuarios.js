const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const { q, nombre = 'no name', apiKey, page = 1, limit } = req.query;

    res.json({
        text: "get msg APi - controllador",
        q,
        nombre,
        apiKey,
        page,
        limit
    })
  }

  const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        text: "put msg APi - controllador",
        id
    })
  }

  const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        text: "post msg APi - controllador",
        nombre, edad
    })
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        text: "delete msg APi - controllador"
    })
  }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }