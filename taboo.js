const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const store = require("connect-loki");

const TabooGame = require("./lib/taboo-game");
const { ResultWithContext } = require("express-validator/src/chain");

const app = express(); //sets up the express application object
const LokiStore = store(session);

const generateTeams = (teams = "team 1") => {
  if (typeof teams === "string") {
    teams = [teams];
  }
  console.log(teams);
  return teams
    .map((team, idx) => {
      return team === "" ? `Team${idx + 1}` : team;
    })
    .map((teamName) => {
      console.log(teamName);
      return { name: teamName, score: 0 };
    });
};

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
  let tabooGame = req.session.tabooGame || new TabooGame(60, 3, 1, "Team 1");
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
  let teamsList = generateTeams(req.body.teams);
  req.session.tabooGame = new TabooGame(time, rounds, teams, teamsList);
  console.log(req.session.tabooGame.teamsList);
  res.redirect("/play");
});

app.get("/play", (req, res) => {
  res.render("play", { tabooGame: req.session.tabooGame });
});
app.get("/rules", (req, res) => {
  res.render("rules");
});
app.get("/about", (req, res) => {
  res.redirect("https://en.wikipedia.org/wiki/Taboo_(game)");
});
app.get("/buzzer", (req, res) => {
  res.render("buzzer");
});

app.listen(process.env.PORT || 3000, () => {
  //tells express to listen for requests
  console.log(`listening to requests...`);
});
