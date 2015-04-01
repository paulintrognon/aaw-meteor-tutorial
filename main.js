Squares = new Mongo.Collection('squares');
Soldiers = new Mongo.Collection('soldiers');

if (Meteor.isClient) {
  Template.board.helpers({
    squares: Squares.find({})
  });

  Template.square.helpers({
    getX: function () {
      return this.pos.x * 50;
    },
    getY: function () {
      return this.pos.y * 50;
    }
  });
}
