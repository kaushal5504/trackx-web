const Registerchema= require("../models/RegisterModel")

exports.addUser=async(req,res) =>{
    const {email,username,password} =req.body
    const user=Registerchema({
        email,
        username,
        password
    })
    try {
        const resp=await user.save()
        res.status(200).json(resp)
        console.log("user successfully added");
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getUser = async (req, res) =>{
    try {
        const {username,password}=req.params
        const resp = await Registerchema.find({username:username,password:password})
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}
