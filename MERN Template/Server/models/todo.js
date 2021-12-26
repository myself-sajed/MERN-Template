const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    todo: {
        type: 'string',
        required: true
    },
    check: {
        type: 'boolean',
        default: false
    }

}, { collection: 'todo' })

module.exports = mongoose.model('todo', formSchema)