import express from 'express'
import mongoose from 'mongoose'

const URL = 'mongodb+srv://user:user@cluster0.0qh4m0r.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(URL)
    .then(()=> console.log('DB ok'))
    .catch((err)=>console.log('DB error', err))

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('working')
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    res.json({success:true})
})

app.listen(4000, (err)=>{
    if (err) {
        console.log(err)
    }
    console.log('server working')
})