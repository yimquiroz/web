//Import modules
const express = require('express');
const path = require('path');

// Create a router object
const router = express.Router();

//export our router
module.exports = router;

//route to HOME
router.get('/', (req, res)=>{
    res.render('pages/home',{extra:"Examen U3"});
});

//route Ventas

router.get('/venta',(req,res)=>{
   res.render('pages/venta');
});

router.post('/venta',(req,res)=>{

   var dlls=1000;
   var pesos=20000;

   var venta=req.body.vent;
   var cambio = req.body.cantidad; 

   
      if(cambio >= dlls){
         result="No hay dinero suficiente";
      }
      else{
        result = cambio * venta;
        
      }

      const personal={message:' Su total es '+ result};
      res.render('pages/thank-you',{per: personal});
});


//route Compras

router.get('/compra',(req,res)=>{
   res.render('pages/compra');
});

router.post('/compra',(req,res)=>{
    
   var dlls=1000;
   var pesos=20000;

   var compra = req.body.comp;
   var cambio = req.body.cantidad; 

   
      if(cambio >= pesos){
        result="No hay dinero suficiente";
      }
      else{
        result = cambio * compra;
        
      }
    
    
  
   const personal={message:' Su total es '+ result};
   res.render('pages/thank-you',{per: personal});
});




