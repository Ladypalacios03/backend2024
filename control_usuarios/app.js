const express=require("express");

const app=express();
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

app.get("/usuarios", (req, res)=> {
    res.status(200).send({usuarios});
})//obtener informacion

app.get("/usuarios/1",(req, res)=>{
    res.status(200).send(usuarios[0]);

});


app.get("/usuarios/:id",(req, res)=>{
    const {id}=req.params;
    //const params = req.params;
    //console.log(params);
   const usuario= usuarios.find((usuario)=>usuario.id === +id);

    //res.status(200).send("probando");
    res.status(200).send(usuario);

});

app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
});