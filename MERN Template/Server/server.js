// Mongodb Password : Sajed, Username : Sajed

const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('express');
const jwt = require('jsonwebtoken');
app.use(json())
const mongoose = require('mongoose');
app.use(cors());
const todo = require('./models/todo')

// Database Configuration

const URL = 'mongodb+srv://Sajed:Sajed@todolist.vihrg.mongodb.net/TODOList?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connection successful');
}).catch(err => console.log('Database connection failed'));



app.post('/sendTodo', (req, res) => {
    const { reqtodo, check } = req.body
    const mytodo = new todo({ todo: reqtodo })
    mytodo.save()
    console.log(mytodo);
    res.send(mytodo)
})

app.get('/getTodo', (req, res) => {
    todo.find({}, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
    });
})




app.listen(3001, function () {
    console.log('Server started successfully at 3001.');
})