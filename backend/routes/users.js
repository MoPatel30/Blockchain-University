const router = require("express").Router()
let User = require("../models/user.model")

router.route("/").get((req, res) => {
    console.log("request received")
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Errors: " + err))

})


router.route("/add").post((req, res) => {
    console.log("request received")
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
        .then(() => res.json("user added!"))
        .catch(err => res.status(400).json("Errors: " + err))

})

module.exports = router
