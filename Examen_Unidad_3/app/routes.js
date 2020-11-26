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


//Variables Fondo
var dlls=1000;
var pesos=20000;

//route Ventas

router.get('/venta',(req,res)=>{
   res.render('pages/venta');
});

router.post('/venta',(req,res)=>{

 

   var venta=req.body.vent;
   var cambio = req.body.cantidad; 

   
   if(cambio/venta >= dlls){
      console.log("No hay dinero suficiente");
    }
    else{
      result = cambio /venta ;    
    }

      const personal={message:' Su total es '+ result};
      const balanzapesos = {message:'Tienes '+(dlls = dlls - result) + ' dlls en caja'};
      const balanzadlls = {message:'Tienes pesos ' + (pesos = pesos + cambio ) + ' en caja'};
      res.render('pages/thank-you',{per: personal});
      res.render('pages/thank-you',{baldlls: balanzadlls});
      res.render('pages/thank-you',{balp:balanzapesos});
      
});


//route Compras

router.get('/compra',(req,res)=>{
   res.render('pages/compra');
});

router.post('/compra',(req,res)=>{
    
  
   var compra = req.body.comp;
   var cambio = req.body.cantidad; 

   
   if(compra*cambio >= pesos){
      console.log("No hay dinero suficiente");
    }
    else{
      result = cambio * compra;
        }
    
   const personal={message:' Su total es '+ result};
   const balanzapesos = {message:'Tienes '+(dlls = dlls + cambio) + ' dlls en caja'};
   const balanzadlls = {message:'Tienes pesos ' + (pesos = pesos - result) + ' en caja'};
   res.render('pages/thank-you',{per: personal});
   res.render('pages/thank-you',{baldlls: balanzadlls});
   res.render('pages/thank-you',{balp:balanzapesos});
});




