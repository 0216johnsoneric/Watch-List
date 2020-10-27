var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "movies_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
 
// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM movies_db;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { movies_db: data });
  });
});

app.post("/movies", function(req, res) {
  connection.query("INSERT INTO movies_db (movie) VALUES (?)", [req.body.movie], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new plan
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
