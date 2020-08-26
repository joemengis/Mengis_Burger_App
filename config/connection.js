const mysql = require("mysql");



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Singles@220bpm",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected ad id " + connection.threadId);
});
module.exports = connection;