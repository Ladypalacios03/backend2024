const mariadb=require('mariadb');

const config={
    host: 'localhost',
    user: 'root',
    password: 'r00tP45w0rd',
    database: 'pokemon_game',
    port: 3306,
    connectionLimit: 10,

};

const pool=mariadb.createPool(config);

module.exports=pool;