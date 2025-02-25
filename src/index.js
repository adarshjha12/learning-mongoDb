let mongoose = require('mongoose')

// creating databsase locally
mongoose.connect('mongodb://localhost:27017/adarshDb')
.then( () => console.log('connection successful'))
.catch((err) => console.log(err))


// defining structure of the document

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
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

let insertData = async () =>{
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
// insertData()


// reading documents by filter or queries

// ------------------comparision operators for filter--------------------
// $gte - greater than equal to
// $lte - less than equal to
// $gt - greater than 
// $lt - less than 
// $in - takes an array and inside you can add multiple options that present 
// $nin - takes an array and inside you can add multiple options that isn't present
// $eq - equal to.

// ------------------logical operators for filter--------------------

// $or
// $nor
// $and
// $not

let readDocuments = async () =>{
    try {
        let result = await UserData.find({active : true}).select({title: 1, _id:0}).sort({title: -1})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
//readDocuments()

let updateDocuments = async (_id) =>{
    try {
        let newDocument = await UserData.findByIdAndUpdate({_id}, {$set: {roll_no: 31}}, {new: true} )
        console.log(newDocument);
    } catch (error) {
        console.log(error);
    }
}

// updateDocuments('6698c8bdc6b92e55e81f20b9')

const deleteDocument = async () =>{
    try {
        let deletedDoc = await UserData.deleteOne({title: "loganPaul"})
        console.log(deletedDoc);
    } catch (error) {
        console.log(error);
    }
}
// deleteDocument()

//we can also delete docs by id like this
// const deleteDocument = async (_id) =>{
//     try {
//         let deletedDoc = await UserData.deleteOne({_id})
//         console.log(deletedDoc);
//     } catch (error) {
//         console.log(error);
//     }
// }
// deleteDocument('6698c8bdc6b92e55e81f20b9')