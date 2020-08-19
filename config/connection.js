const mysql = require("mysql");

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Singles@220bpm",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected ad id " + connection.threadId);
});
module.exports = connection;