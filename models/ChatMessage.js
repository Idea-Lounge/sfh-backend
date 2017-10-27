(function() {
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema

  var ChatMessageSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    proposal: {
      type: Schema.Types.ObjectId,
      ref: 'Proposal'
    },
    timestamp: {
      type: Date,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });

  var ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

  module.exports = ChatMessage;
}());
