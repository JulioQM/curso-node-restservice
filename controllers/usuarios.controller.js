const { response } = require('express');
// son los callback de los metodos get, post, put, delete
const usuarioGet = (req, res = response) => {
    res.json({
        msg: 'get - controller'
    });
}

const usuarioPost = (req, res = response) => {
    const {nombre}=req.body;
    res.json({
        msg: 'post - controller',
        nombre
    });
}

const usuarioPut = (req, res = response) => {
    const id=req.params.id;
    res.json({
        msg: 'put - controller',
        id
    });
}

const usuarioDelete = (req, res = response) => {
    const query=req.query;
    res.json({
        msg: 'delete - controller',
        query

    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}