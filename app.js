const express =require('express');
const mongoose= require('mongoose')
const PORT= 6700;
const _method= require('method-override');
const path = require('path');
const { urlencoded } = require('body-parser');
const app =express()

//middlewares
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//database connection
mongoose.set('strictQuery',false)
mongoose.connect('mongodb://127.0.0.1:27017/loanDB',{
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


app.listen(PORT,()=>{
    console.log(`app running on http://localhost:${PORT}`)
})
