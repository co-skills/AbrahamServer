const mongoose = require("mongoose")
const {
    material,
    products
}= require("../Model/ProductsMaterialModel")

const GetMaterials = async (req, res)=>{
  try {
    const mat = await material.find({}).sort({createdAt:-1})

    res.status(200).json(mat)
  } 
  catch (error) {
    error ? res.status(400).json ({error:error.message}) : null
  }
}

const GetProducts = async (req,res)=>{
  try {
    const pro = await products.find({}).sort({createdAt:-1})

    res.status(200).json(pro)
  } 
  catch (error) {
    return error ? res.status(400).json({error:error.message})  : null
  }
}

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
const DeleteMaterial = async (req,res)=>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'Information does not Exist'})
  }

  const Mat = await material.findOneAndDelete({_id:id})

  if(!Mat){
      return res.status(400).json({error:"Information does not Exist"})
  }
  res.status(200).json(Mat)
}

const DeleteProducts = async (req,res)=>{
  const {name} = req.params

  
  const pro = await products.findOneAndDelete({collectionName:name})

  if(!pro){
      return res.status(400).json({error:"products does not Exist"})
  }
  res.status(200).json(pro)
}

const UpdateMaterial= async (req,res)=>{
  const {id}= req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json(
          {error:"Such Mat does not exist"}
      )
  }
  const Mat = await material.findOneAndUpdate({_id:id},{
      ...req.body
  })

  if (!Mat){
      return res.status(400).json({error:'No such Information Exist'})
  }

  res.status(200).json(Mat)
}


module.exports={
    GetMaterials,
    GetProducts,
    createMaterial,
    createProduct,
    UpdateMaterial,
    DeleteMaterial,
    GetandPopulateProducts,
    DeleteProducts
}