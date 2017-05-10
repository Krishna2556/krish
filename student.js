var mongoose = require('mongoose');
//Defining Schema
var productSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    cost: {
        type: String,
        required: true
    },

    barcode: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    any other details: {
        type: String,
        required: true
    }
});

var stupackage = module.exports = mongoose.model('ProductCollection', productSchema); //Binding schema 

module.exports.addProduct = function(data, callback) {
    stupackage.create(data, callback);
}
module.exports.getProductByField = function(ret, callback) {
    stupackage.find({name:ret}, callback);
}
module.exports.updateProduct = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        cost: data.cost,
        bar code: data.bar code,
        city: data.city,
       any other details: data.any other details
    }
    stupackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeProduct = function (name, callback) {
    var query = {
        name: name
    };
    stupackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stupackage.find(callback);
}

