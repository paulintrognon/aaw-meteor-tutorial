function generateSquares() {
  var terrains = [
    {name: 'grass', isWalkable: true},
    {name: 'forest', isWalkable: true},
    {name: 'water', isWalkable: false}
  ];

  var maxX = 10,
      maxY = 10,
      squares = [];

  for(var y = 0; y < maxY; y++) {
    squares[y] = [];
    for(var x = 0; x < maxX; x++) {
      squares[y][x] = _.sample(terrains);
    }
  }
  return squares;
}

if (Meteor.isClient) {
  var squares = generateSquares();
  Template.board.helpers({
    squares: squares
  });
}
