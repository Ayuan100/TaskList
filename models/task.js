var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    user: { type: String, select: false },

    date: String,
    name: String,
    priority: Number,
    isDone: Boolean,
    createdTime: Number,
    doneTime: Number,
    timeCost: Number
});


module.exports = mongoose.model('Task', TaskSchema);