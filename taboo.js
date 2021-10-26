const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || "8000";

app.set("views", "./views");
app.set("view engine", "pug");
app.use(morgan("common"));
app.get("/", (req, res) => {
  res.render("layout");
});

app.listen(port, () => {
  console.log(`listening to requests on http://localhost:${port}...`);
});
