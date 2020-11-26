const router = require("express").Router()
let Exercise = require("../models/exercise.model")

router.route("/").get((req, res) => {
    console.log("request received")
    Exercise.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Errors: " + err))

})


router.route("/add").post((req, res) => {
    console.log("request received")
    const username = req.body.username
    const description = req.body.description
    const notes = req.body.notes
    const date = Date.parse(req.body.date)
   
    const newExercise = new Exercise({
        username,
        description,
        notes,
        date
    })

    newExercise.save()
        .then(users => res.json("Exercise added!"))
        .catch(err => res.status(400).json("Errors: " + err))

})


router.route("/:id").get((req, res) => {
    console.log("request received")
    Exercise.findById(req.params.id)
        .then(exercise =>res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err))

})


router.route("/:id").delete((req, res) => {
    console.log("request received")
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted."))
        .catch(err => res.status(400).json("Error " + err))
})


router.route("/update/:id").post((req, res) => {
    console.log("request received")
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.notes = req.body.notes
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(() => res.json("Exercise updated!"))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
})


module.exports = router

