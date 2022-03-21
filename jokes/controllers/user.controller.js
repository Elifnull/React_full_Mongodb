const User = require("../models/user.model");

module.exports.findAllUsers = (req,res) => {
    User.find()
    .then((allDaUsers) => {
        res.json({user: allDaUsers})
    })
    .catch((err) => {
        res.json({message: "something went wrong", error: err})
    });
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(oneSingleUser => {
            res.json({user: oneSingleUser})
        })
        .catch((err)=> {
            res.json({message: "something went wrong", error: err})
        });
}

module.exports.createNewUser = (req,res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.json({user: newlyCreatedUser})
        })
        .catch(er => {
            res.json({message: "Something went wrong", error: er})
        });
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch(er => {
            res.json({message:"something went wrong", error: er})
        });
}

module.exports.deleteAnExistingUser = (req,res) => {
    User.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch(er => {
        res.json({message: "something went wrong", error:er})
    });
}