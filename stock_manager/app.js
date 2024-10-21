const express=require("express");

const app=express();
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hola mundo");
})//1. obtener informacion

app.listen(3000, ()=>{
    console.log("Example app listening on port 3000")
});