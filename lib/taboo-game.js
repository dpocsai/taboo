const gameId = require("./game-id");

class TabooGame {
  constructor(time, rounds, teams, teamsList) {
    this.id = gameId();
    this.time = time;
    this.rounds = rounds;
    this.teams = teams;
    this.teamsList = [...teamsList];
  }
}

module.exports = TabooGame;
