const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({

    name: String,
    image: String,
    price: {type: Number, default : 0 },
    category:{type: String,enum:['computers','phones','accessories']},
    description : String,
    email:{type:String,unique:true,lowercase:true},


});

module.exports = mongoose.model('Product',ProductSchema);