const asyncHandler = require('express-async-handler')



const registerUser = asyncHandler( async (req,res)=>{

    console.log(req.body)
    
    const {name , category , dificulty , question } = req.body

    if(!name  || !category || !dificulty || !question){
        res.status(201)
        throw new Error("Fill All The Fields")
    }


    const user = await userModel.create({
        name,
        category,
        dificulty,
        question
    })


    if (user) {
        res.status(201).send({
            status:'ok'
        })
    } else {
        res.status(400)
        throw new Error('Fail to Create User')
    }

})



module.exports = { registerUser}