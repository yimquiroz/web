const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

const router = require('./app/routes');
app.use('/', router);

app.listen(port, function()
{
    console.log('app started in port 3001');
});