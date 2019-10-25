require("dotenv").config();
const mysql = require("mysql");

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

const person = {
    name: "",
    photo_url: "",
    answers: []
};

module.exports = function(app){
    app.get("/api/friends",(req,res)=>{

    });

    app.post("/api/friends",(req,res)=>{
        const person = req.body;
        console.log(person);
        res.send(true);
    });
};