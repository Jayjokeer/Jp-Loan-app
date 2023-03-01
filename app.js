const express =require('express');
const mongoose= require('mongoose')
const _method= require('method-override');
const path = require('path');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv')
const app =express()


//middlewares
dotenv.config()
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//database connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
},
    err=>{
        if(!err){
            console.log('database connected!')
        }else{
            console.log(`${err}`)
        }
    }
)


app.get('/',(req,res)=>{
    res.json({message:'human being'})
})


app.listen(process.env.PORT,()=>{
    console.log(`app running`)
})
