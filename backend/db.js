const mongoose = require('mongoose');
const { array } = require('./input');

mongoose.connect(""); // paste your mongo db url 

const dataschema =new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    intrests: [{type: String}],
    links: [{type: String}]
})

const datamodel = mongoose.model('details', dataschema);

module.exports = datamodel