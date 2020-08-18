const express = require('express');  
const app = express();  
const UserRoutes = express.Router();  
const mongoose = require("mongoose");

// Require User model in our routes module  
let User = require('../models/User');  

// Save new user here
UserRoutes.route('/add').post(function (req, res) {
  req.body._id = new mongoose.Types.ObjectId(); 
  let user = new User(req.body);   
  user.save()  
    .then(user => {  
      res.status(200).json({'User': 'User has been added successfully'});  
    })  
    .catch(err => {  
        res.status(400).send("unable to save to database");  
    });
});  

// Read All users 
UserRoutes.route('/').get(function (req, res) {  
  User.find(function (err, users){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(users);  
    }  
  });  
});  

// Edit a User by id
UserRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;
  User.findById(id, function (err, user){  
      res.json(user);  
  });  
});  

// Update User by id
UserRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {  
    if (!user)  
      res.status(404).send("Record not found");  
    else {  
      console.log(user);
      user.UserName = req.body.UserName;  
      user.UserLastName = req.body.UserLastName;  
      
      user.save().then(User => {  
          res.json('Update complete');  
      })  
      .catch(err => {  
            res.status(400).send("unable to update the database" + err.message);  
      });  
    }  
  });  
});  

// Defined delete | remove | destroy route  
UserRoutes.route('/delete/:id').get(function (req, res) {  
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){  
        if(err) res.json(err);  
        else res.json('Successfully removed');  
    });  
});  

module.exports = UserRoutes;  