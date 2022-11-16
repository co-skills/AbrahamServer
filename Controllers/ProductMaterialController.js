const mongoose = require("mongoose")
const {
    material,
    products
}= require("../Model/ProductsMaterialModel")

const createMaterial= async (req,res)=>{
  try {
    const {Name,collectionName, Price, AmonutSold} = req.body

    const mat= await material.create({
      Name,
      collectionName,
      Price,
      AmonutSold
    })

    res.status(200).json(mat)

  } 
  catch (error) {
    if (error){
      res.status(404).json({error:error.message})
    }
  }
 
}

const createProduct = async (req, res)=>{
  try {
      const {collectionName}= req.body

    const pro = await products.create({
      collectionName,
      materialss:[]
    })

    res.status(200).json(pro)
  } 
  catch (error) {
    if (error){
      res.status(404).json({error:error.message})
    }
  }
}

const GetandPopulateProducts = async (req, res)=>{
  try {
    const {name} = req.params

    const mat=await material.find({collectionName:name})
     
    console.log(mat)
    const pro = await products.findOneAndUpdate({collectionName:name},{materialss:mat} )

    console.log(pro)
    res.status(200).json(pro)
  } 
  catch (error) {
    return(
      error ? res.status(400).json({error:error.message}) : null
    )
  }
}



module.exports={
    createMaterial,
    createProduct,
    GetandPopulateProducts
}