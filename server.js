require("dotenv").config();
const mysql = require("mysql");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

let connection;
if (process.env.JAWSDB_URL) {
    //setup connection to use JAWSDB instance on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    //setup local connection
    connection = mysql.createConnection({
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        port: process.env.LOCAL_DB_PORT,
        host: localhost,
        database: process.env.LOCAL_DB_NAME
    });
};

connection.connect(err => {
    if (err) {
        console.error("Error connecting to db: " + err.stack);
        return;
    }
    console.log("Connected to db as id: " + connection.threadId);
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app, connection);
require("./app/routing/htmlRoutes")(app, connection);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});


