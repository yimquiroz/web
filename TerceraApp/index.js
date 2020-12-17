const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const hbs = require('express-handlebars');
const { response } = require('express');
const Product = require ('./models/product');
const app = express();

//Configuracion body-parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Motor de Vistas HandleBars
app.engine('.hbs',hbs({
    defaultLayout : 'index',
    extname:'hbs'
}));

app.set('view engine', '.hbs');

//Declaracion de carpeta
app.use('/static',express.static('public'));

//Metodos
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/api/product', (req, res) => {
    
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save( (err,productStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en BD ${err}`});
        res.status(200).send({ product:productStored });
    });

});


//Conexion a BD y levantar Servidor
mongoose.connect( config.db, config.urlParser, ( err,res ) =>{

    if(err){
        return console.log(`Error al conectar la BD ${err}`);
    }
    console.log('Conexion a la BD exitosa');

    app.listen(config.port, ()=>{
        console.log(`API-REST  yeiii ejecutando en http://locahost:${config.port}`)

    });
});


