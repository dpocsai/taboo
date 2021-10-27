const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const store = require("connect-loki");

const TabooGame = require("./lib/taboo-game");
const { ResultWithContext } = require("express-validator/src/chain");

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
app.use((req, res, next) => {
  console.log(req.session.tabooGame);
  let tabooGame =
    req.session.tabooGame || new TabooGame(60, 3, 2, ["Team 1", "Team 2"]);
  req.session.tabooGame = tabooGame;
  next();
});
app.get("/", (req, res) => {
  res.render("layout");
});
app.get("/settings", (req, res) => {
  res.render("settings");
});
app.post("/settings", (req, res) => {
  let time = +req.body["time-range"];
  let rounds = +req.body["rounds-range"];
  let teams = +req.body["team-range"];
  let teamsList = req.body.teams.map((team, idx) => {
    team = team.trim();
    return team === "" ? `Team ${idx + 1}` : team;
  });
  req.session.tabooGame = new TabooGame(time, rounds, teams, teamsList);
  res.redirect("/");
});
app.get("/play", (req, res) => {
  res.render("play", { tabooGame: req.session.tabooGame });
});
app.listen(port, () => {
  //tells express to listen for requests
  console.log(`listening to requests on http://localhost:${port}...`);
});
