//ratelimitter

const express = require("express");
const app = express();

let numberofrequestsforuser = {};
setInterval(() => {
  numberofrequestsforuser = {};
}, 1000);

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];
  if (numberofrequestsforuser[userId]) {
    numberofrequestsforuser[userId] += 1;
    if (numberofrequestsforuser[userId] > 5) {
      return res.status(404).json({
        msg: "Too many requests",
      });
    }
  } else {
    numberofrequestsforuser[userId] = 1;
    next();
  }
});
