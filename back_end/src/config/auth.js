const Register=require('../models/register');

const jwt = require("jsonwebtoken");
module.exports.Authenticate = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization.split(" ")[1],
      decoded;
    // console.log("Auth", authorization);
    try {
      // console.log(process.env.SECRET);
      decoded = jwt.verify(authorization, "Umar");
      // console.log(decoded);
    } catch (e) {
      // console.log(e);
      return res.status(422).json({
        message: "UnAuthorized Access",
      });
    }
    var aId = decoded._id;
    Register.findOne({ _id: aId }).then(function (user) {
      // Do something with the user
      req.user = user;
      console.log("User Verified");
      return next();
    });
  } else {
    return res.status(422).json({
      message: "Invalid credentials",
    });
  }
};
