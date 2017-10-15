var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	title: String,
	text: String,
	time: String
});


module.exports = mongoose.model('Comment', CommentSchema);