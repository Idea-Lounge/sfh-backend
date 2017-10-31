(function () {
  var router = require('express').Router(),
    mongoose = require('mongoose'),
    Proposal = mongoose.model('Proposal'),
    ChatMessage = mongoose.model('ChatMessage'),
    User = mongoose.model('User');
    // validate = require('express-validation'); // codeReview(Anurag): add validator for all requests


    router.post('/create', function (req, res, next) {
      var response = {};
      var newProposal = new Proposal();
      // codeReview(Anurag): need user data
      newProposal.title = req.body.title;
      newProposal.description = req.body.title;
      newProposal.details = req.body.details;
      newProposal.implementation = req.body.implementation;
      newProposal.expectedImpact = req.body.expectedImpact;
      newProposal.active = false;
      newProposal.save(function (error, savedProposal) {
        if (!error) {
          console.log('Added new proposal. Sending to admins');
          // codeReview(Anurag): send email to admins for approval
          response = {
            message: 'Proposal logged. Sending to Admins for approval.'
          };
          res.json(response);
        } else {
          console.error('Proposal could not be saved to mongo!');
          response = {
            error_code: 500,
            message: 'Proposal could not be logged due to some error. Try again later.'
          };
          res.json(response);
        }
      });
    });
})();
