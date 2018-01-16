const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "trainee"
});
module.exports = conn;

// connect to db
conn.connect(err => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});