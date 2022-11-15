const mongoose = require("mongoose")
const {
    material,
    products
}= require("../Model/ProductsMaterialModel")

const createMaterial= async (req,res)=>{
  try {
    const {Name, Price, AmonutSold} = req.body

    const mat= await material.create({
      Name,
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

    // const mat = new material({
    //     _id: new mongoose.Types.ObjectId(),
    //     Name: 'Ian Fleming',
    //     Price: 50,
    //     AmonutSold:10
    //   });
      
    //   mat.save(function (err) {
    //     if (err) return handleError(err);
      
    //     const pro = new products({
    //         collectionName: 'Casino Royale',
    //         materialss: mat    // assign the _id from the person
    //     });
      
    //     pro.save(function (err) {
    //       if (err) return handleError(err);
    //       console.log("good")
    //     });
    //   });

    //   products.findOne({ collectionName: 'Casino Royale' }).populate("materialss") 
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
    const pro = await products.find({})
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
    const pro =await  products.findOneAndUpdate({id:req.params.id},{$push:{materialss:req.body.materialId}}, {new:true})

  res.status(200).json (pro)
  } 
  catch (error) {
    return(
      error ? res.status(400).json({error:error.message}) :null
    )
    
  }
}

module.exports={
    createMaterial,
    createProduct,
    updateProduct,
    GetandPopulateProducts
}