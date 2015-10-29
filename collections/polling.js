/**
 * Simple Meteor Polling App. From: https://scotch.io/tutorials/learn-meteor-js-from-scratch-build-a-polling-app
 * Created by philipjohnson on 8/30/15.
 */

Polls = new Mongo.Collection('polls');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("polls", function () {
    return Polls.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("polls");
}