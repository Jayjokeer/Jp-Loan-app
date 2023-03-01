const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        dafault:false
    },
    number:{
        type:Number,
        required: true,
        unique: true
    }
    
},{timestamps:true})


module.exports = mongoose.model('userDB',userSchema)