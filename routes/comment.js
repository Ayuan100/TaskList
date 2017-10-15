var express = require('express');
var passport = require('passport');
var Comment = require('../models/comment');
var router = express.Router();

var origin = '*';
router.get('/:title', function(req, res) {
	console.log('get comment of title:', req.params.title);
    Comment.find({
                    title:req.params.title
                }, 'title text time')
            .sort({time: 1} )
            .exec(function(err, comments){
                if(err){
                    res.send(err);
                }
                // console.log('get comments:',comments);
                res.header('Access-Control-Allow-Origin',origin);
                res.json(comments);
                // console.log(tasks.length);
            });
    
    
});

router.post('/', function(req, res) {
    console.log('add comment:', req.body);
    Comment.create(req.body, function(err, comment){
            if(err){
                res.send(err);
            }
            res.header('Access-Control-Allow-Origin',origin);
            res.json(comment);
        });
});

// Delete Task
router.delete('/:id',  function(req, res, next){
    console.log('delete:', req.params.id);
    // res.header('Access-Control-Allow-Origin',origin);
    Comment.remove({
            _id: req.params.id
        }, function(err, comment){
        if(err){
            res.send(err);
        }
        res.header('Access-Control-Allow-Origin',origin);
        res.json(comment);
    });
});
router.options("/:id", function(req, res, next){
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

module.exports = router;