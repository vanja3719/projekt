var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('expenses/expenses');
});

router.get('/add', function (req, res, next) {
  res.render('expenses/expensesAdd');
});

module.exports = router;