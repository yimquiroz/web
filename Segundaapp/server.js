/*jshint esversion: 6 */
const express   =   require('express');
const bodyParser    =   require('body-parser');
const cors  =   require('cors');
const app   =   express();

const mongoose = require('mongoose');
const mongoUri = require('mongodb-uri');

const mongodbUri =  'mongodb+srv://yimq:1234abcd@cluster0.phfar.mongodb.net/test1?retryWrites=true&w=majority';
const mongooseUri = mongoUri.formatMongoose(mongodbUri);
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };

const hostName = 'localhost';
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());

let contacts = require('./data');


app.use('/api/contacts',require('./api/routes/get_contacts.js'));

app.get('/api/contact/:id', (req, res)=>{
    const reqId = req.params.id;
    
    let contact = contacts.filter(contact =>{

        return contact.id == reqId;
    });
    if(!contact){
        res.status(404).json({
                message: 'No se encontraron contactos'
            }); 
         }
         console.log(contact);
         res.json(contact[0]);
    });

/*app.post('/api/contacts', (req,res)=>{

    const contact={
        id: contacts.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        websites:req.body.website
    };
    contacts.push(contact);

        res.json(contact);
})*/

app.put('/api/contact/:id', (req,res)=>{

    const reqId= req.params.id;

    let contact = contacts.filter(contact =>{

        return contact.id == reqId;
    }) [0];

    const index = contacts.indexOf(contact);
    console.log("Este es el valor de index: " + index);
    const keys = Object.keys(req.body);
    console.log("Este es el valor de Object keys: " + Object.keys);
    console.log("Este es el valor de KEYS" + keys);

    keys.forEach(key =>{
        contact[key] = req.body[key];
        console.log[req.body];
    });

    contacts[index]=contact;
console.log("esto vale contact [index]: " + contacts[index]);
    res.json(contact[index]);
});

app.listen(port, hostName, ()=>{
    
    mongoose.connect(mongooseUri, dbOptions, (err)=>{
        if (err) {
            console.log(err);
            console.log( "Algo salio MAL");

        }else {
            console.log(`server is running at http :${hostName} :${port}`);
        }
    });
    
});
app.use('/api/contacts', require('./api/routes/post_contact')); //llamamos POST
app.use('/api/contacts', require('./api/routes/get_contacts')); //llamamos GET

