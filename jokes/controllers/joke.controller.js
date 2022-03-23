const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find({})
    .then((allJokes) => {
        res.json({Jokes: allJokes})
    })
    .catch((err) => {
        res.json({message: "sommehting went wrong", error: err})
    });
}

module.exports.findOneJoke = (req,res) => {
    Joke.findById(req.params.id)
    .then(Joke => {
        res.json(Joke)
    })
    .catch((err)=> {
        res.json({message: `error code ${err}`, error: err})
    });
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(NewJoke => {
            res.json(NewJoke)})
        .catch(err => {
            res.json({message: `Error code: ${err}`, error: err})
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedJoke => {
            res.json({user: updatedJoke})
        })
        .catch(er => {
            res.json({message:"something went wrong", error: er})
        });
}
module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne(req.params.id)
        .then(res =>
            res.json({deleted: res}))
        .catch(er => {
            res.json({message: `Error ${er}`})
        });
}