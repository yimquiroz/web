const express = require('express');
//const Contact = require('../models/Contact');
const Contact=require('../contacts/models/Contact');
const router = express.Router();

//usamos el prefijo que identificara la ruta

router.route('/')
    .post((req, res) => {

// Como vamos a insertar en la BD primero crearemos un objeto con el ESQUEMA de nuestro MODELO y le asignaremos //todos los datos que proceden del formulario.
        const contact = new Contact(req.body);
    
//Ahora intentamos guardar nuestro objeto (el que contiene los datos) y mediante una función de callback nos regresara el error o el contacto ya guardado.
        contact.save((err, contact) =>{
            if(err) {
                res.status(400).json(err); 
            }
            res.json(contact); //mandamos a la vista el contacto guardado
        });
    });
module.exports = router; //exportamos el método para que pueda ser usado.
