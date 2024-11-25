const express=require("express");
const usersRoutes=require('./routes/users');

//Importar las rutas 
const staffRoutes = require('./routes/staff');
const productsRoutes = require('./routes/products');
const suppliersRoutes = require('./routes/suppliers');
const purchasesRoutes = require('./routes/purchases'); 

class Server{
    constructor (){
        this.app=express();
        this.port=3000;
        this. middlewares();
        //this.app.use(express.json()); //Metodo express, es un middleware
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
    }
    /*routes (){
        this.app.get("/", (req, res)=> {
            res.send('Hello world!');
        });
    }*/
    routes(){
        //Registrar las rutas 
        this.app.use('/users', usersRoutes);
        this.app.use('/staff', staffRoutes);
        this.app.use('/products', productsRoutes);
        this.app.use('/suppliers', suppliersRoutes);
        this.app.use('/purchases', purchasesRoutes);  
    }

start() {
    this.app.listen(this.port, ()=>{
        console.log('Server listening on port ' + this.port);
    });
}
}

module.exports={Server};
