const express = require("express")

const {
    signup,
    verify,
    resend,
    Login
} = require("../Controllers/UserController") 



const router = express.Router()

//signup 
router.post("/signup",signup)

router.post("/verifyOtp", verify )

router.post("/resendotp", resend)

router.post("/login", Login)

module.exports= router