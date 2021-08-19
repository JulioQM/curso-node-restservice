const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/usuarios.controller');
const router = Router();
//manejo de rutas de edpoint
router.get('/', usuarioGet);
router.post('/', usuarioPost);
router.put('/:id', usuarioPut);
router.delete('/', usuarioDelete);



module.exports = router;



