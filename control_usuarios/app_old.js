const express=require("express");

const app=express();

app.get("/", (req, res)=> {
    res.status(404).send("Hola mundo!");
})//obtener informacion

app.get("/prueba", (req, res)=> {
    res.status(200).send("Hola mundo desde la ruta prueba!");
})//obtener informacion


app.post("/", (req, res)=> {
    res.status(200).send("Hola desde post!");
}) // crear un nuevo recurso

app.put("/", (req, res)=> {
    res.status(200).send("Hola desde put!");
}) // actualixar un recuerso

app.put("/", (req, res)=> {
    res.status(200).send("Hola desde put!");
}) // actualizar un recuerso

app.patch("/", (req, res)=> {
    res.status(200).send("Hola desde patch!");
}) // actualizar un recurso parcialmente

app.delete("/", (req, res)=> {
    res.status(200).send("Hola desde delete!");
}) // Eliminar un recurso


app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
});