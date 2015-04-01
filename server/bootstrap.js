// if the database is empty on server start, generate the terrain
Meteor.startup(function () {
  if (Squares.find().count() === 0) {
    console.log('generating');
    generateSquares();
    generateSoldiers();
  } else {
    console.log('not generating');
  }

  function generateSquares() {
    var maxX = 9,
        maxY = 9,
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

  function generateSoldiers() {
    var soldier = {
      name: 'James',
      pos: {
        x: 4,
        y: 7
      }
    };
    Soldiers.insert(soldier, function (err, soldierId) {
      var square = Squares.findOne({'pos.x': soldier.pos.x, 'pos.y': soldier.pos.y});
      Squares.update(square._id, {$set: {'soldier_id': soldierId}})
    });
  }
});
