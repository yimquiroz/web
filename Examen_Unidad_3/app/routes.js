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

router.post('/venta',(req,res)=>{

  var Nombre=req.body.Name.substr(0,1);
  Nombre;
   const personal={message:' Su CURP a sido generado '+ CURP};
   res.render('pages/thank-you',{per: personal});
});

//route Compras
router.post('/compra',(req,res)=>{
    
   var dlls=1000;
   var pesos=20000;
   var compra=19.20;

   var cambio = req.body.cantidad; 

   
      if(cambio >= dlls){
        console.log("No hay dinero suficiente");
      }
      else{
        result = cambio * compra;
        //console.log("Su cambio es: " + result);
      }
    
    
  
   const personal={message:' Su total es '+ result};
   res.render('pages/thank-you',{per: personal});
});



 //route thank you


router.get('/thank-you',(req,res)=>{
   res.render('pages/compra');
});
