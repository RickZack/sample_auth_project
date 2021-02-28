const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.json({msg:"user id="+req.params.id})
});

module.exports = router;
