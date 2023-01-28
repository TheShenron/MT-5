const express = require('express')
const app = express()

const questionModel = require('./model/questions.model')
const userModel = require('./model/user.model')


//cors
const cors = require('cors')
app.use(cors())

//dotenv
require('dotenv').config()

//db
const connect = require('./config/db')
const { default: axios } = require('axios')

//json
app.use(express.json())


//routes



app.get("/" , (req,res)=>{
    res.send({statue:"Welcome to API Ref.."})
})

app.get('/addData' , async (req,res)=>{

    // axios('https://opentdb.com/api.php?amount=50')
    // .then( ({data})=>{
    //     console.log(data)
    //     // const resp = questionModel.insertMany(data.results)
    //     // console.log(resp)
    //     res.send("Done")

    // })

    res.send("Done")
    // .catch(err=>console.log(err))
})


app.get('/question' , async (req,res)=>{

    const query = req.query

    try {

        console.log(query)

        const getQuest = await questionModel.find(query).limit(query.limit || Infinity)

        res.send(getQuest)

    } catch (error) {
        console.log(error)
        res.send("Error")
    }



})
app.post('/score' , async (req,res)=>{

    const { name , category , dificulty , question , score } = req.body

    try {

        const Adduser = await userModel.create({
            name,
            category,
            dificulty,
            question,
            score
        })

        if(Adduser){
            res.send({
                status:'ok'
            })
        }else{
            res.send("Failed to Add...")
        }
        
    } catch (error) {
        console.log(error)
        res.send("Error")
    }


})


app.get('/score' , async (req,res)=>{

    const {name} = req.query

    try {

        if(name){

            const getlist = await userModel({name})

            res.send(getlist)

        }else{
            res.send([{}])
        }
        
    } catch (error) {
        console.log(error)
        res.send("Error")
    }

})





app.listen(process.env.PORT , async ()=>{
    console.log("App is listning at " , process.env.PORT)

    await connect
    console.log("Connected to DB..")

})