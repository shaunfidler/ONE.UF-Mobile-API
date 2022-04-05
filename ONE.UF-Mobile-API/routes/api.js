var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel.js');

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
      if(!(users[0].res_user == undefined))
      {
        res.send(users[0].res_user)
      }else{
        res.send({"error": "User data not found."})
      }
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
});

/* GET grades. */
router.get('/transcript/getgrades', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getgrades == undefined))
      {
        res.send(users[0].res_getgrades)
      }else{
        res.send({"error": "Grades data not found."})
      }
      
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
});

/* GET unofficial transcript. */
router.get('/transcript/getunofficialtranscript', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getunofficialtranscript == undefined))
      {
        res.send(users[0].res_getunofficialtranscript);
      }else{
        res.send({"error": "Unofficial Transcript data not found."});
      }
      
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
  .catch((error) => {
    res.send({"error": error, "source": "mock"})
  })
});

/* GET account activities (Bursar). */
router.get('/campusfinances/getaccountactivities', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getaccountactivites == undefined))
      {
        res.send(users[0].res_getaccountactivites)
      }else{
        res.send({"error": "User activity data not found."})
      }
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
});

/* GET payment history */
router.get('/campusfinances/getpaymenthistory', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getpaymenthistory == undefined))
      {
        res.send(users[0].res_getpaymenthistory)
      }else{
        res.send({"error": "Payment history data not found."})
      }
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
});

/* GET charges due */
router.get('/campusfinances/chargesdue', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_chargesdue == undefined))
      {
        res.send(users[0].res_chargesdue)
      }else{
        res.send({"error": "Charges due data not found."})
      }
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
});

/* GET payment link. */
router.get('/campusfinances/getpaymentlink', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getpaymentlink == undefined))
      {
        res.send(users[0].res_getpaymentlink);
      }else{
        res.send({"error": "Payment link not found."});
      }
      
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
  .catch((error) => {
    res.send({"error": error, "source": "mock"})
  })
});

/* GET account balance. */
router.get('/campusfinances/getaccountbalance', function(req, res, next) {
  shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
  userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    if(users.length != 0) 
    {
      if(!(users[0].res_getaccountbalance == undefined))
      {
        res.send({ "accountBalance": users[0].res_getaccountbalance });
      }else{
        res.send({"error": "Account balance not found."});
      }
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
  .catch((error) => {
    res.send({"error": error, "source": "mock"})
  })
});

/* GET current schedule - Spring 2022. */
router.get('/myschedule/2221', function(req, res, next) {
    shibsession = req.cookies["_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f"]
    userModel.find({ "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": shibsession })
    .then((users) => {
      res.setHeader('Content-Type', 'application/json');
      if(users.length != 0) 
      {
        if(!(users[0].res_myschedule_2221 == undefined))
        {
          res.send(users[0].res_myschedule_2221);
        }else{
          res.send({"error": "Spring 2022 Schedule data not found."});
        }
      
    }else
    {
      res.send({"error": "User not found."})
    }    
  })
  .catch((error) => {
    res.send({"error": error, "source": "mock"})
  })
});

module.exports = router;
