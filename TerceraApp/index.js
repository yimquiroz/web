'use strict'

const express = require('express')

const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const config = require('./config')
const Product = require('./models/product')
const bodyParser = require('body-parser')
const app = express()





// $ npm i -S method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))



app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({
    defaultLayout: 'index',
    extname: '.hbs'
  }))
  app.set('view engine', '.hbs')
  
  app.use('/static',express.static('public'))
  
app.get('/',(req,res) =>{
    res.render('home')
})

app.get('/insertar', (req, res)=>{
    res.render('product')
})

app.get('/api/product',(req, res) =>{
    Product.find({},(err,products)=>{
    if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
    if(!products) return res.status(404).send({message:`No existen productos`})
    //res.status(200).send( {products:[products]})
    res.render('products',{products})
})
    
})

app.get('/api/product/:productId',(req,res)=>{
    let productId = req.params.productId
   // console.log(req.body)
    Product.findById(productId,(err,products) =>{
      // Product.find({price:productId},(err,todook)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion${err}`})
        if(!products) return res.status(404).send({message:`El producto no existe`})
        //res.status(200).send({product:todook})
        res.render('editar',{products})
    })
})

app.post('/api/product',(req,res)=>{
    console.log('POST /api/product')
    console.log(req.body)
    //res.status(200).send({message:'El producto se a recibido'})
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
      console.log(req.body)
    product.save((err, productStored) =>{
        if (err) res.status(500).send({message:`Error al salvar en BD ${err}`})

        res.status(200).send({product: productStored})
    })
})

app.put('/api/product/:productId',(req,res)=>{
   
    let productId = req.params.productId
    console.log(`EL product es: ${productId}`)
    
    let update = req.body
    console.log(update)
    
   // Product.findAndModify({_id:productId}, update,(err,products)=> {
       Product.findOneAndUpdate({_id:productId}, update,(err,products)=> {
        if (err) res.status(500).send({message:`Error al actualizar el producto el producto ${err}`})
        //res.status(200).send({product: products})
       res.redirect('/api/product')
       
    })
})

app.delete('/api/product/:productId',(req,res)=>{
    let productId = req.params.productId

    Product.findById(productId,(err,product)=>{
     if (err) res.status(500).send({message:`Error al borrar el producto ${err}`})

        product.remove(err => {
            if (err) res.status(500).send({message:`Error al borrar el producto ${err}`})
            res.status(200).send({message:'El producto ha sido eliminado'})
        })

    })
}) 

mongoose.connect(config.db, config.urlParser, (err,res) =>{
    if(err) {
        return console.log(`Error al conectar la BD ${err}`)
    }
    console.log('Conexion a la BD exitosa')

    app.listen(config.port,() => {
    console.log(`API-REST  yeiii ejecutando en http://locahost:${config.port}`)
    })
})
/*
mongoose.connect('mongodb://localhost:27017/shop',(err,res) =>{
    if(err) {
        return console.log(`Error al conectar la BD ${err}`)
    }

    console.log('Conexion a la BD exitosa')

    app.listen(port,() => {
    console.log(`API-REST  yeiii ejecutando en http://locahost:${port}`)
    })
})*/

// PARA deploy : heroku login
// git init
//heroku git:remote -a api-rest-pgj
// git add .
// git commit -am 'preparing to heroku'
// git push heroku master