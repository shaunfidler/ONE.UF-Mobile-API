var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  "_shibsession_68747470733a2f2f73712e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f68747470733a2f2f73702e6c6f67696e2e75666c2e6564752f75726e3a6564753a75666c3a70726f643a30303734312f": {
    type: String,
    required: true,
  },
  "res_users": {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("userModel", userSchema, "users");