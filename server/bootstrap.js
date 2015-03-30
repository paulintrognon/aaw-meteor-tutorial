// if the database is empty on server start, generate the terrain
Meteor.startup(function () {
  if (Squares.find().count() === 0) {
    console.log('generating the squares');
    generateSquares();
  } else {
    console.log('not generating the squares');
  }

  function generateSquares() {
    var maxX = 10,
        maxY = 10,
        terrains = [
          {name: 'grass', isWalkable: true},
          {name: 'forest', isWalkable: true},
          {name: 'water', isWalkable: false}
        ];

    var squares = [];
    for (var y = 0; y < maxY; y++) {
      squares[y] = [];
      for (var x = 0; x < maxX; x++) {
        var square = {
          terrain: _.sample(terrains),
          pos: {x: x, y: y}
        };
        Squares.insert(square);
        squares[y][x] = square;
      }
    }
  }
});
