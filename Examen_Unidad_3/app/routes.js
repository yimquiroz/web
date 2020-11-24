//Import modules
const express = require('express');
const path = require('path');

// Create a router object
const router = express.Router();

//export our router
module.exports = router;

//route to HOME
router.get('/', (req, res)=>{
    res.render('pages/home',{extra:"Practica RFC"});
});

//route Ventas
router.post('/contact',(req,res)=>{

  var Nombre=req.body.Name.substr(0,1);
  Nombre;
   const personal={message:' Su CURP a sido generado '+ CURP};
   res.render('pages/thank-you',{per: personal});
});

//route Compras
router.post('/contact',(req,res)=>{

 // var Nombre=req.body.Name.substr(0,1);
  
   const personal={message:' Su CURP a sido generado '+ CURP};
   res.render('pages/thank-you',{per: personal});
});



 //route thank you

router.get('/contact',(req,res)=>{
   res.render('pages/contact');
});