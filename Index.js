const express =require("express")

const mongoose = require("mongoose")
const cors = require("cors")

const bodyParser = require('body-parser')

const validationRoute = require("./Routes/UserRout")

const material= require("./Routes/ProductsMaterialRoute")
 const matpro = require("./Routes/MaterialProductsRoute")

// const Materials = require("./Routes/MaterialRoute")

const Customers = require("./Routes/CustomerRoute")

require("dotenv").config()

const app = express()

app.use(express.json())

app.use(bodyParser.json())

app.use(cors())

app.use("/api",validationRoute)

app.use("/api", matpro)

// app.use("/api", Materials)

app.use("/api", material)

app.use("/api", Customers)

mongoose.connect(process.env.MONOURL)
.then( ()=>{

    app.listen(process.env.PORT, (req,res)=>{
        console.log("database connected..... listening on port 5000")
    })
})
.catch((err)=>{
    console.log(err)
})
