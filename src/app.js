let mongoose = require('mongoose')

// console.log(typeof mongoose);
mongoose.connect('mongodb://localhost:27017/newdb').then( () => console.log('connection successful'))