const express=require("express");

const app=express();

app.get("/usuarios", (req, res)=> {
    const usuarios=[
        {
            id: 1,
            nombre: "Lady",
            apellido: "Palacios",
            email: "ladyrosa.86@gmail.com"
        },
        {
            id: 2,
            nombre: "Agustin",
            apellido: "Palacios",
            email: "ladyrosa.86@gmail.com"
        },
    ];
    res.status(200).send(usuarios);
})//obtener informacion

app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
});