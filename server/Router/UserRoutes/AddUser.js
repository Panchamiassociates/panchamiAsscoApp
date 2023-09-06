const { default: mongoose} = require("mongoose")
const UserModel = require('../../Model/User')


module.exports =  AddUser = async (req,res)=>{
    const newUser = await UserModel.create(req.body);
    try{
        newUser.save();
        res.status(200).json({
            message: "User add successfully",
            user : newUser
        })
    }
    catch(err){
        res.status(400).json({
            message :"user cannot be added",
            error : err
        })
    }
}

