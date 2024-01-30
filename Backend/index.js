const express=require("express")
const app=express()
const {createTodo, updateTodo} =require("./types") 
const {todo} =require("./db")
const cors=require("cors")
app.use(express.json())
app.use(cors())

app.post("/todo",async (req,res)=>{
 const createPayLoad=req.body
 const parsePayLoad=createTodo.safeParse(createPayLoad)
 if(!parsePayLoad.success){
    res.status(411).json({
        msg:"You sent the wrong input"
    })
    return
 }  
//put it in mongodb
 await todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false
     
})

res.json({
    msg:"Todo created"
})
})     

app.get("/todos",async (req,res)=>{
const todos=await todo.find({})
res.json({
   todos
})
})


app.post("/completed",async(req,res)=>{
    try{
const createPayLoad=req.body
const parsePayLoad= updateTodo.safeParse(createPayLoad)
if(!parsePayLoad.success){
    res.status(411).json({
        msg:"enter valid inputww"
    })
    return   
} 
const updateTodo2 = await todo.updateOne({
    _id:req.body._id
 },{
 completed:true
 }
 ) 
 if(updateTodo2.modifiedCount===1){
 res.json("Your todo is updated")
 }}
 catch(err){
    console.log(err)
 }
})
app.listen(3000,()=>{
    console.log(`server is runnin on port 3000`)
    })