var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel.js');

var getUser = async() => {
  let found = await userModel.find();//findOne( { "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": "_5683892e3f11ea5ea384c15b4e_SHAUN" } );
  console.log(found);
  return found;
}

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  userModel.find()
  .then((users) => {
    res.send(users);
  });
});

/* GET user. */
router.get('/uf/user', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      res.send(users[0].res_users)
    }else
    {
      res.send({"error": "User not found"})
    }    
  })
});

module.exports = router;
