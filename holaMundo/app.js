//import { otroMensaje } from "./hola"
//const {otroMensaje}=require ("./hola")
//console.log("Este es el punto de entrada")
//console.log(otroMensaje)

const tareas= [
    {
        nomnbre:"estudiar para el examen",
        fecha:"23/09/2024",
        hecho:false

    },

    {
        nomnbre:"ir de compras",
        fecha:"23/09/2024",
        hecho:false 
    },

    {
        nomnbre:"Hacer tarea",
        fecha:"23/09/2024",
        hecho:true
    },
    
];

const tareasPorRealizar=tareas.filter(tareas=> !tareas.hecho);
console.log(tareasPorRealizar);