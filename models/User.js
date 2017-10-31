(function() {
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var UserSchema = new Schema({
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  });

  var User = mongoose.model('User', UserSchema);

  module.exports = User;
}());
