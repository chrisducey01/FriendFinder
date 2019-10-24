require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

const PORT=process.env.PORT || 3000;

let connection;
if(process.env.JAWSDB_URL){
    //setup connection to use JAWSDB instance on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    //setup local connection
    connection = mysql.createConnection({
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        port: process.env.LOCAL_DB_PORT,
        host: localhost,
        database: process.env.LOCAL_DB_NAME
    });
}

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
});


