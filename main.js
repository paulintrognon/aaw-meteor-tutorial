Squares = new Mongo.Collection('squares');

if (Meteor.isClient) {
  Template.board.helpers({
    squares: Squares.find({})
  });
}
