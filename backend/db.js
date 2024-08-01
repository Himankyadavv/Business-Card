const mongoose = require('mongoose');
const { array } = require('./input');

mongoose.connect("mongodb+srv://Himank:Himank123@cluster-0.tbaskcb.mongodb.net/card");

const dataschema =new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    intrests: [{type: String}],
    links: [{type: String}]
})

const datamodel = mongoose.model('details', dataschema);

module.exports = datamodel