const mongoose = require('mongoose');
const User = require('./models/User')

//
const express = require('express');
const app = express();

//
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mongoose', { useUnifiedTopology: true })
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log(`could not connect`, err)
    });

// const newUser = new User({
//     firstName: 'Emmanuel',
//     lastName: 'Iyanu'
// });

// newUser.save(function (err, savedDats) {
//     if (err) throw err
//     console.log(savedDats)
// })

app.use('/', (req, res) => {
    res.send('DETAILS')
})

app.post('/user', (req, res) => {
    const newUser = new User({
        firstName: 'Emmanuel',
        lastName: 'Iyanu'
    });

    newUser.save().then(savedData => {
        console.log('saved user')
    })
}).listen(3200);

console.log('listening on port 3200 ')