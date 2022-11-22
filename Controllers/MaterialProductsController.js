const mongoose = require("mongoose")
const Customer = require("../Model/CustomerModel")

const {
    material,
    products
}= require("../Model/ProductsMaterialModel")


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

const updateProduct = async (req, res)=>{
  try {
    const pro =await Customer.aggregate([
      {$group:{_id:"$FirstName"}}
    ])
  res.status(200).json (pro)
  } 
  catch (error) {
    return(
      error ? res.status(400).json({error:error.message}) :null
    )
    
  }
}

module.exports={
  GetandPopulateProducts,
  updateProduct
}