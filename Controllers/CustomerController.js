const mongoose = require("mongoose")

const Customer = require("../Model/CustomerModel")

const createCustomer= async (req,res)=>{

    const {FirstName,LastName,PhoneNumber,email,TotalAmountPaid}=req.body

    try {
        const CreateCustomer = await Customer.create({FirstName,LastName,PhoneNumber,email,TotalAmountPaid})

        res.status (200).json(CreateCustomer)
    }

    catch (error){
        if(error){
            res.status(400).json({error:error.message})
        }
    }
}

// Get A Single Customer

const GetSingleCustomer = async (req, res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Customer Exist"})
    }

    const customer = await Customer.findById(id)

    if (!customer){
        res.status(404).json({error:"No such Customer Exist"})
    }

    res.status(200).json(customer)
}

// Get All Customer

const GetCustomer = async (req, res)=>{
    const customer = await Customer.find({}).sort({createdAt:-1})

    res.status(200).json(customer)
}

const DeleteCustomer = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Information does not Exist'})
    }

    const customer = await Customer.findOneAndDelete({_id:id})

    if(!customer){
        return res.status(400).json({error:"Information does not Exist"})
    }
    res.status(200).json(customer)
}

const UpdateCustomers= async (req,res)=>{
    const {id}= req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json(
            {error:"Such Customer does not exist"}
        )
    }
    const Customer = await Customer.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!Customer){
        return res.status(400).json({error:'No such Information Exist'})
    }

    res.status(200).json(Customer)
}

module.exports={
    createCustomer,
    GetSingleCustomer,
    GetCustomer,
    DeleteCustomer,
    UpdateCustomers
}