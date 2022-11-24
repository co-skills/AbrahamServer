const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MaterialSchema = new Schema ({
    Name:{
        type:String,
        required:true
    },
    collectionName:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    AmonutSold:{
        type:Number,
        required:true
    },
    customers:[]
},{timestamps:true})

const ProductSchema = new Schema({
    collectionName:{
        type:String
    },
    materialss:[]

},{timestamps:true})

const material = mongoose.model("materials", MaterialSchema)

const products = mongoose.model("products", ProductSchema)

module.exports= {
    material,
    products
}