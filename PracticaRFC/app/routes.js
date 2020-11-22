   var express=require('express');
   var router=express.Router();

   module.exports=router;//Exportamos todo el archivo routes

   /*router.get('/',(req,res)=>{});

   router.post('/contact',(req,res)=>{
     var Nombre=req.body.Name;
     var Email=req.body.Correo;
     var Sujeto=req.body.Mensaje;

     console.log('Nombre'${Nombre} Correo: ${Email} Mensaje:${Sujeto})
   })*/

   router.post('/contact',(req,res)=>{
     var Nombre=req.body.Name.substr(0,1);
     var APaterno=req.body.Paterno.substr(0,2);
     if(APaterno.substr(0,1).toUpperCase=="Ñ")
     {
       APaterno="A"+APaterno.substr(1,1);
     }
     var AMaterno=req.body.Materno.substr(0,1);

     if(AMaterno.toUpperCase()=="Ñ")
     {
       AMaterno="X";
     }

     var Caracter=["/","-","."];
     if(Caracter.includes(APaterno.substr(0,1))==true)
     {
       APaterno=APaterno.substr(0,1)+"x"
     }
     else if(Caracter.includes(AMaterno.substr(0,1))==true)
     {
       AMaterno="x"
     }
     var primeras4=APaterno+AMaterno+Nombre;
     var Año=req.body.fenac.substr(2,2);
     var Mes=req.body.fenac.substr(5,2);
     var Dia=req.body.fenac.substr(8,2);
     var aleto1=Math.round(Math.random()*(0-9)+parseInt(9));
     var aleto2=Math.round(Math.random()*(0-9)+parseInt(9));
     var aleABC=Math.round(Math.random()*(0-25)+parseInt(25));
     var ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ'//Abecedario
     var Letra=ABC.substr(aleABC,1);
     var AñoCompleto=req.body.fenac.substr(0,4);
     var extra="";
     if(AñoCompleto.substr(0,1)=="1")
     {
       extra=alea1;
     }
     else
     {
       extra=letra;
     }

     var sex=req.body.sexo;
     var edo=req.body.estado;
     var primconstintp=req.body.Paterno.substr(1,req.body.paterno.length)
     separador="",
     arreglopat=primconstintp.split(separador);
     arreglopat.forEach(element => {
       if(primconstintp.length!=1)
       {
         if(element=='a'|| element=='e'||element=='i'||element=='o'||element=='u')
         {}
         else{primconstintp=element;}
       }
       
     });
     var primconstintM=req.body.Materno.substr(1,req.body.Materno.length)
     separador="",
     arregloMat=primconstintM.split(separador);
     arregloMat.forEach(element => {
       if(primconstintM.length!=1)
       {
         if(element=='a'|| element=='e'||element=='i'||element=='o'||element=='u')
         {}
         else{primconstintM=element;}
       }
       
     });
     var primconstintN=req.body.Name.substr(1,req.body.Name.length)
     separador="",
     arregloNommbre=primconstintN.split(separador);
     arregloNommbre.forEach(element => {
       if(primconstintN.length!=1)
       {
         if(element=='a'|| element=='e'||element=='i'||element=='o'||element=='u')
         {}
         else{primconstintN=element;}
       }
       
     });

     var CURP=primeras4+Año+Mes+Dia+sex+edo+primconstintp+primconstintM+primconstintN+extra+aleto2;
     console.log('CURP: ${CURP}');
     res.render('pages/Listo,{CURP}');






   
    })

