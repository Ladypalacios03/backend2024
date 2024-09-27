//console.log("Hola Mundo");
//import {createServer} from 'node:http';
const {createServer}=require ("http");
const server =createServer((req, res)=> {
res.write("Hola mundo");
res.end();

});

server.listen(8080);
console.log("servidor inicializado");
