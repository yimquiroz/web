const express = require('express');
const Contact = require('../contacts/models/Contact');

const router = express.Router();


router.route('/:id').delete((res,req)=>{

    const _id = req.params.id;
    Contact.findOneAndRemove({_id},(err,contact)=> {
        if(err)
        {
            return res.status(400).json(err);
        }
        if(!contact){
            return res.status(400).json({message:`No se encontro el contacto`});
        }

       res.json({message:`El contacto: ${contact._id} se elimino` });
    });
});

module.exports=router;