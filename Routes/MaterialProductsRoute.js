const express = require("express")

const {
    GetandPopulateProducts
}= require("../Controllers/MaterialProductsController")

const router = express.Router()

//router.post ("/matpro", createMateriall)

// router.post("/produts",createProduct )

// router.put("/produts/:id", updateProduct)

 router.get("/products/:name",GetandPopulateProducts)


module.exports=router
