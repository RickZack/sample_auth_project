const express = require('express');
const router = express.Router();
const checkJwt = require('./jwtmiddleware.js');

/* GET users listing. */
router.get('/:id', checkJwt, function(req, res, next) {
  res.json({msg:"response from the API. You are authenticated and your used id is:"+req.user.sub})
});

module.exports = router;
