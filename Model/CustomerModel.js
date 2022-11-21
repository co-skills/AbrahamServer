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
        type:String,
        required:true,
        unique:true
    },
    DriverName:{
        type:String,
        required:true
    },
    SiteLocation:{
        type:String,
        required:true
    },

    itemsBought:[],
        
    TotalAmountPaid:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports= mongoose.model("Customers", customerSchema)