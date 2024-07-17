let mongoose = require('mongoose')

// creating databsase locally
mongoose.connect('mongodb://localhost:27017/adarshDb')
.then( () => console.log('connection successful'))
.catch((err) => console.log(err))


// defining structure of the document

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    class: String,
    active: Boolean,
    roll_no: Number,
    date:{
        type: Date,
        default: Date.now
    }
})

// making collection of docs.
const UserData = new mongoose.model('userData', userSchema)

// making documents

let resultFunction = async () =>{
    try {
        let firstDoc = new UserData({
            title: 'mrBeast',
            class: 'seven',
            active: true,
            roll_no: 305,
        })

        let output = await firstDoc.save()
        console.log(output);
    } catch (error) {
        console.log(error);
    }
}

resultFunction()
// console.log(typeof UserData);

