let currentId = 0;

let gameId = () => {
  currentId += 1;
  return currentId;
};

module.exports = gameId;
