const express=require("express");

const app=express();
app.use(express.json());

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


/*app.get("/usuarios/:id",(req, res)=>{
    const {id}=req.params;
    //const params = req.params;
    //console.log(params);
    //console.log(typeof(+id));
    if(isNaN(id)){
        res.status(400).send({error:"El id debe ser un numero"});
        return;
    };
    const usuario= usuarios.find((usuario)=>usuario.id === +id);
    res.status(200).send(usuario);
    //res.status(200).send("probando");

});*/

app.get("/usuarios/:id",(req, res)=>{
    const {id}=req.params;
    //const params = req.params;
    //console.log(params);
    //console.log(typeof(+id));
    const usuario= usuarios.find((usuario)=>usuario.id === +id);
   if(usuario===undefined){
    res.status(404).send({error:`el usuario con id ${id} no existe`});
    return;
   };
    res.status(200).send(usuario);
    //res.status(200).send("probando");
});//end point

app.post("/usuarios", (req, res)=> {
const {nombre, apellido, email}=req.body;
usuarios.push({id: usuarios.length +1, nombre, apellido, email})
res.status(201).send("El usuario se agrego correctamennte");
    //console.log(req.body);
    //res.send("Hola desde post!");
}) // crear un nuevo recurso


app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
});