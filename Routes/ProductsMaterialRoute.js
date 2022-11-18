const express = require("express")

const {
    GetMaterials,
    GetProducts,
    createMaterial,
    createProduct,
    UpdateMaterial,
    DeleteMaterial,
    GetandPopulateProducts,
    DeleteProducts
}= require("../Controllers/ProductMaterialController")

const router = express.Router()

router.get("/material", GetMaterials)

router.get("/products", GetProducts)

router.post ("/material", createMaterial)

router.post("/products",createProduct )

router.get("/products/:name",GetandPopulateProducts)

router.delete('/material/:id', DeleteMaterial)

router.patch("/material/:id", UpdateMaterial)

router.delete('/products/:name', DeleteProducts)


module.exports=router
