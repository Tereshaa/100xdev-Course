//Creating http server

const express=require("express")
const bodyParser =require("body-parser")

const app=express()

const port =3000

//middlewares
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})