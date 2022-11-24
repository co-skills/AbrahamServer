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
     
    //console.log(mat)
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
    const {materialName}= req.body

    const pro =await Customer.aggregate([
      {$project:{_id:0}},
      {$unwind:"$itemsBought"},
      {$match:{"itemsBought.item":{$eq: materialName}} }
    ])
   
  
     const root = await material.findOneAndUpdate({Name:materialName},{customers:pro})

    res.json(root)
    console.log(root)
    // const root = await pro.map((element) =>{
    //   // const pro =  material.findOneAndUpdate({Name:"bend pipe"},{customers:element} )
    //   res.json(pro)
    //   console.log(element)
    //   //res.json(element)

    // })
  } 
  catch (error) {
    return(
      error ? res.status(400).json({error:error.message}) :null
      
    )
    console.log(error)
    
  }
}

module.exports={
  GetandPopulateProducts,
  updateProduct
}