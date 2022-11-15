const express = require("express")

const {
    createCustomer,
    GetSingleCustomer,
    GetCustomer,
    DeleteCustomer,
    UpdateCustomers
} = require("../controllers/CustomerController")

const router= express.Router()

router.post("/customer", createCustomer)

router.get("/customer",  GetCustomer)

router.get("/customer/:id", GetSingleCustomer )

router.patch("/customer/:id", UpdateCustomers)

router.delete("/customer/:id", DeleteCustomer)

module.exports = router