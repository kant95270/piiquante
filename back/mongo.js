const { MongoClient, ServerApiVersion, default: mongoose}  = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const password = process.env.DB_PASSWORD
const username = process.env.DB_USER
const db= process.env.DB_NAME
const uri =`mongodb+srv://${username}:${password}@cluster0.2ml0j.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log("Connected to Mongol!"))
  .catch((err) => console.error("Error connecting to Mongo:",err))

const userSchema =new mongoose.Schema({
    email : { type:String, require :true ,unique:true },
    password : { type: String , require : true }
})
userSchema.plugin(uniqueValidator)

const User = mongoose.model("user" ,userSchema)

module.exports = {mongoose, User}