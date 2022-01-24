const router = require("express").Router();

const Usuario = require("../models/Usuario")

// obtener todos los usuarios
router.get('/', async (req,res)=>{
    const usuarios = await Usuario.findAll()
    res.json(usuarios);
});

// un solo usuario
router.get('/:id', (req,res)=>{
    const { id } = req.params;
    res.json({
        id,
        nombre: "usuario",
    });
});

// crear un usuario
router.post('/', async (req, res)=>{
    const { nombre, email } = req.body;

    if(!nombre || !email){
        return res.status(400).json({
            error:"Uno o mas campos vacios"
        });
    }

    const usuario = await Usuario.create({ nombre, email });

    res.json(usuario);
});


module.exports = router;