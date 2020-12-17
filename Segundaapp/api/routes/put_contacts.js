const express = require('express');
const Contact = require('../contacts/models/Contact');

const router = express.Router();

router.route('/:id').put((req,res)=>{
    const _id = req.params.id;
 
    Contact.findOneAndUpdate({_id},req.body,{new : true},(err,contact)=> {
      
        if (err) {
            res.status(400).json(err);
          }
          res.json(contact);
      

    });

});


module.exports = router;
