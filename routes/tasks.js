var express = require('express');
var passport = require('passport');
var Task = require('../models/task');
var router = express.Router();

var isAuthenticated = function(req,res,next) { 
    if(req.user) console.log('user of current request:', req.user.email);
    else console.log('unlogged user');
    if (req.isAuthenticated()) return next(); 
    res.status(400);
    res.json({"error":'not logged'});

};

// Get Tasks for One Day
router.get('/tasks', isAuthenticated, function(req, res, next){
    var date = req.query.date;
    var isDone = req.query.isDone; //in string
    console.log('get tasks for date:', date, ' isDone:', isDone);

    if( date && isDone && req.user.email){
        Task.find({
                    user:req.user.email, 
                    date: date, 
                    isDone:(isDone=='true')
                },
                '-user')
            .sort({priority: 1})
            .exec(function(err, tasks){
                if(err){
                    res.send(err);
                }
                res.json(tasks);
                // console.log(tasks.length);
        });
    }
});

//Add New Task
router.post('/task', isAuthenticated, function(req, res, next){
    var task = req.body;
    console.log('add new task: ',task.name);
    if(!task){
        // console.log('bad request:',req);
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        task.user = req.user.email;
        Task.create(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task._id);
        });
    }
});

// Delete Task
router.delete('/task/:id', isAuthenticated, function(req, res, next){
    console.log('delete:', req.params.id);
    Task.remove({
            _id: mongojs.ObjectId(req.params.id),
            user: req.user.email
        }, function(err, task){
        if(err){
            res.send(err);
        }
        else res.json(task);
    });
});

// set task to be done
router.put('/task/:id', isAuthenticated, function(req, res, next){
    var updateTask = req.body;
    console.log('update task:', req.params.id, ' to ', updateTask);
    if(updateTask && req.params.id){
        Task.where({
                _id: mongojs.ObjectId(req.params.id),
                user: req.user.email
            })
            .update({$set:updateTask}, function(err, task){
                if(err){
                    return res.send(err);
                }
                console.log(task.nModified, ' task is updated');
                res.json(null);
            });
    }
    else{
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
});

module.exports = router;