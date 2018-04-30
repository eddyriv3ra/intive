const express = require("express");
const router = express.Router();

//Load user model
const User = require("../../models/User");

//  @route GET api/users/test
//  @desc Test users route
//  @access Public
router.get("/test", (req, res) => res.json({ msg: "users working" }));

//  @route POST api/users
//  @desc Post new users route
//  @access Public

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    country: req.body.country,
    age: req.body.age
  });
  newUser
    .save()
    .then(user => {
      res.json({ user });
    })
    .catch(err => res.json(err));
});

router.get("/", (req, res) => {
  User.find()
    .sort({ date_added: -1 })
    .then(user => res.json({ user }))
    .catch(err => res.json({ err }));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

module.exports = router;
