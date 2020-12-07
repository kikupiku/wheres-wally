let express = require('express');
let router = express.Router();

router.get('/' , function(req, res, next) {
    res.json({'message':'API is working properly'});
});
router.get('/game-1', function(req, res, next) {
    res.json({'message':'Wally at Feast'});
});

module.exports = router;