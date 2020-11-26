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
      const balanzapesos = {message:'Tienes '+(dlls = parseFloat(dlls) - parseFloat(result)) + ' dlls en caja'};
      const balanzadlls = {message:'Tienes ' + (pesos = parseFloat(pesos) + parseFloat(cambio) ) + ' pesos en caja'};
      const personal={message:' Su total es '+ result};
      
      res.render('pages/thank-you',{per: personal, baldlls: balanzadlls, balp:balanzapesos});
    }

      
     
      
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
      const balanzapesos = {message:'Tienes '+(dlls = parseFloat(dlls) + parseFloat(cambio)) + ' dlls en caja'};
      const balanzadlls = {message:'Tienes ' + (pesos = parseFloat(pesos) - parseFloat(result)) + ' pesos en caja'};
      const personal={message:' Su total es '+ result};
  
      res.render('pages/thank-you',{per: personal,baldlls: balanzadlls,balp:balanzapesos});
   
        }
    
   
});




