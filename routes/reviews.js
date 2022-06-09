const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
const reviewsCtrl = require('../controllers/reviews')

// You Do - Define the Route below

// use the path from show.ejs but change squid with a param of :id /movies/<%= movie._id %>/reviews
router.post('/movies/:id/reviews', reviewsCtrl.create)
//need to invoke the create object of this ^
//when a post request comes in, look at the .create in the reviewsCtrl
module.exports = router;