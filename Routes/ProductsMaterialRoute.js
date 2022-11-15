const express = require("express")

const {
    createMaterial,
    createProduct,
    updateProduct,
    GetandPopulateProducts
}= require("../Controllers/ProductMaterialController")

const router = express.Router()

router.post ("/material", createMaterial)

router.post("/produts",createProduct )

router.put("/produts/:id", updateProduct)

router.get("/produts",GetandPopulateProducts)


module.exports=router
