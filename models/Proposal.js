(function() {
  "use strict";
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var ProposalSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: true,
      maxLength: 50
    },
    description: {
      type: String,
      required: true,
      maxLength: 200
    },
    details: {
      type: String,
      required: true
    },
    implementation: {
      tasks: [{
        type: String,
      }],
      involvement: [{
        name: {
          type: String
        },
        role: {
          type: String
        },
        socialMediaLinks: [{
          platform: {
            type: String,
            enum: ['Twitter', 'Facebook', 'Meetups', 'Email']
          }
        }]
      }]
    },
    expectedImpact: {
      type: String,
      required: 'true'
    },
    likes: [{
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      reason: {
        type: Schema.Types.ObjectId,
        ref: 'ChatMessage'
      }
    }],
    dislikes: [{
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      reason: {
        type: Schema.Types.ObjectId,
        ref: 'ChatMessage'
      }
    }],
    chatMessages: [{
      type: Schema.Types.ObjectId,
      ref: 'ChatMessage'
    }]
  });

  var Proposal = mongoose.model('Proposal', ProposalSchema);

  module.exports = Proposal;
}());
