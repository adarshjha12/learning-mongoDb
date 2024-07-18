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

// creating multi documents

let resultFunction = async () =>{
    try {
        let firstDoc = new UserData({
            title: 'mrBeast',
            class: 'seven',
            active: true,
            roll_no: 305,
        })
        let secondDoc = new UserData({
            title: 'carryminati',
            class: 'nine',
            active: true,
            roll_no: 306,
        })
        let thirdDoc = new UserData({
            title: 'techBurner',
            class: 'seven',
            active: true,
            roll_no: 307,
        })
        let fourthDoc = new UserData({
            title: 'tSeries',
            class: 'eight',
            active: true,
            roll_no: 308,
        })

        let output = await UserData.insertMany([firstDoc, secondDoc, thirdDoc, fourthDoc])
        console.log(output);
    } catch (error) {
        console.log(error);
    }
}
// resultFunction()


// reading documents
let readDocuments = async () =>{
    try {
        let result = await UserData.find({title: 'mrBeast'}).select({title: 1})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

readDocuments()