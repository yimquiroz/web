const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require ('express-ejs-layouts')
const port = process.env.PORT || 8080;

//use ejs and express layouts

app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.static('public'));
//use body parser

app.use(bodyParser.urlencoded({extended:true}));

//route our app

const router = require('./app/routes');
app.use('/',router);

//start the server

app.listen(port, function()
{
    console.log('app started in port 8080');
});

function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
  
  window.onload = function() {
    setInterval(muestraReloj, 1000);
  }
  
  