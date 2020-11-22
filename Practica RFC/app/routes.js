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

//route about
router.get('/about',(req,res)=>{

    

    var users = [
        { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
        { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
        { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
        { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
      ];

    //  res.render('pages/about',{usr:users});

    res.render('pages/about',{usr:users, xy : "Mas valores"});
});



//route Contact
router.get('/contact',(req,res)=>{
    res.render('pages/contact');
});

/*
router.post('/contact',(req,res)=>{

    const personal={message:'thanks for contacting us,' +req.body.name + '! We will shortly!'};
    res.render('pages/thank-you',{per: personal});

});
*/

//Tomar dato del campo Nombre y ponerlo  en una variable

router.post('/contact',(req,res)=>{
/*
    const nom = req.query.name;
   console.log(`${req.query} : ${nom}`);
*/
    var nombre = req.body.name;
    var apellidoP = req.body.apellidoP;
    var apellidoM = req.body.apellidoM;
    var dia = req.body.dia;
    var mes = req.body.mes;
    var anio = req.body.anio;

  
   var rfc = " "; 
/*
var arregloAp = Array.from(apellidoP[0]);
let primeravocalap =arregloAp.find(elemento=> elemento == "A"||"E"||"I"||"O"||"U" );
*/

saludo = Array.from(apellidoP);
otraVariableX = "hola";

for (var i = 0; i < saludo.length[1]; i++) {

 if (saludo == "A"||"E"||"I"||"O"||"U") {
   console.log(saludo)
 }
}

   rfc = rfc + arregloAp[0].charAt(0).toUpperCase();
   rfc = rfc + primeravocalap.charAt(0).toUpperCase();
   rfc = rfc + apellidoM.charAt(0).toUpperCase();
   rfc = rfc + nombre.charAt(0).toUpperCase();

   rfc = rfc + anio;
   rfc = rfc + mes;
   rfc = rfc + dia;

   rfc = rfc + Math.round(Math.random()*9);
   rfc = rfc + Math.round(Math.random()*9);


 //   var rdm = Math.floor((9-4)*Math.random()) +1 ;

    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    rfc = rfc + alfabeto[Math.round(Math.random()*10)].toUpperCase(); 
   
  /* var randiT = "";
    for (i=0;i<2;i++) randiT += caracteres.charAt(Math.floor(Math.random()*caracteres.length));

    rfc=[ap1,ap2,ap3,n,dia,mes,a1,a2,nom,rdm,randiT]; 
    */
    

   const personal={message:'Sr(a) ' + nombre + ' su RFC a sido generado'+ rfc};
   res.render('pages/thank-you',{per: personal});
});



 //route thank you

router.get('/contact',(req,res)=>{
   res.render('pages/contact');
});