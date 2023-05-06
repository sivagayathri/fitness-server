const admins=require('../models/adminschema')
exports.login=async(req,res)=>{
    const { adminid, password } = req.body
    try {
        const result = await admins.findOne({
            adminid, password
        })
        if (result) {

           res.status(200).json("login successfully")
                }
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }
}