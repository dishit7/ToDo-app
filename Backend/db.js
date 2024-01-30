 const mongoose = require("mongoose")
const { boolean } = require("zod")
//mongodb+srv://dishit7:Bulbasaur_47@cluster0.9xcq530.mongodb.net/

mongoose.connect("mongodb+srv://dishit7:Bulbasaur_47@cluster0.9xcq530.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model(
    'Todos',todoSchema
)

module.exports={todo}