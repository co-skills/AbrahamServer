const mongoose = require("mongoose")

const schema = mongoose.Schema


const customerSchema = new schema ({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String
    },

    itemsBought:{
        type:String
    },
    TotalAmountPaid:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports= mongoose.model("Customers", customerSchema)