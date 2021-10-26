const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const store = require("connect-loki");

const app = express(); //sets up the express application object
const port = process.env.PORT || "8000"; //what port to listen on
const LokiStore = store(session);

app.set("views", "./views"); //where to find view templates
app.set("view engine", "pug"); //what view engine to use

app.use(morgan("common")); //enable logging
app.use(express.static("public")); //find static files in public folder
app.use(express.urlencoded({ extended: false })); //format to receive data from post requests - incoming request object will be in this format (can also use express.json())
app.use(
  session({
    cookie: {
      httpOnly: true,
      maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in millseconds
      path: "/",
      secure: false,
    },
    name: "taboo-session-id",
    resave: false,
    saveUninitialized: true,
    secret: "this is not very secure",
    store: new LokiStore({}),
  })
);
app.use(flash());

app.get("/", (req, res) => {
  res.render("layout");
});
app.get("/settings", (req, res) => {
  res.render("settings");
});

app.listen(port, () => {
  //tells express to listen for requests
  console.log(`listening to requests on http://localhost:${port}...`);
});
