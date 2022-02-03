var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ONE.UF Mocked API');
});

/* GET user. */
router.get('/uf/user', function(req, res, next) {
  data = 
  {
    "name": "Shaun Middlename Fidler",
    "legalName": "Fidler,Shaun Middlename",
    "ufid": "12345678",
    "apps": "[]",
    "email": "username@ufl.edu",
    "switchUser": "false"
  }
  res.send(data);
});

module.exports = router;
