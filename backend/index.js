const express=require("express");
const {connection}=require("./db")

const {NewsleeterRoute}=require("./controller/nodemailer")
const app=express()


app.use(express.json());
const cors=require("cors")

app.use(cors())
app.use("/newsLetter",NewsleeterRoute)

app.listen(3000,async(req,res)=>{
    try{
        await connection
        console.log("connected to DB")
        console.log("port is running at 3000");
    }
    catch(err){
        console.log(err)
    }
})
