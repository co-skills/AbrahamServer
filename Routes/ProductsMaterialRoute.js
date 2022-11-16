const express = require("express")

const {
    createMaterial,
    createProduct,
    GetandPopulateProducts
}= require("../Controllers/ProductMaterialController")

const router = express.Router()

router.post ("/material", createMaterial)

router.post("/products",createProduct )

router.get("/products/:name",GetandPopulateProducts)


module.exports=router
