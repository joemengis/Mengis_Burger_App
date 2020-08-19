const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

// var apiRoutes = require("./controllers/api-routes")(app,express);
// var htmlRoutes = require("./controllers/html-routes")(app,express);
// app.use(apiRoutes);
// app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});