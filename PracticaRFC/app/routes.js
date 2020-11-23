   var express=require('express');
   var router=express.Router();

   module.exports=router;//Exportamos todo el archivo routes

//RUTA PARA HOME
router.get('/', (req, res)=>{
  res.render('pages/home',{extra:"Yanez's"});
});
//RUTA PARA ABOUT

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



//RUTA PARA CONTACT
   router.post('/contact',(req,res)=>{
   c
     console.log('CURP: ${CURP}');
     res.render('pages/Listo',{CURP});


   
    })

