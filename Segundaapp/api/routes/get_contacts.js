const express = require('express');
const Contact = require('../contacts/models/Contact');

const router = express.Router();

router.route('/').get((req,res)=>{

    Contact.find({}, (err, contacts) =>{
        if(err){
            res.status(400).json(err);
        }
        res.json(contacts)


    });

});

module.exports = router;
