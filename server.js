
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session")

var userCtrl = require("./userCtrl")

var app = express();

app.use(bodyParser.json());

app.use(session({
	secret: "dqeqwecqrc",
	saveUninitialized: true,
	resave: false
}));

app.get("/users", userCtrl.readAll);


app.get("/users", userCtrl.getUsersByFavorite);
app.get("/users", userCtrl.getUsersByAgeLimit);
app.get("/users", userCtrl.findUserByQuery);


app.get("/user/:id", userCtrl.findUserById);
app.get("/admins", userCtrl.getAdmins);
app.get("/nonAdmin", userCtrl.getNonAdmins);

// app.put("/api/users/:id", userCtrl.updateUser);

app.post("/api/users/:id", userCtrl.createUser);

app.delete("/api/users/:id", userCtrl.removeUser);

// app.listen(3020, function () {
// 	console.log("listening on port 3020");
// });








   
