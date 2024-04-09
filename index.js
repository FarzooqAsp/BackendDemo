require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req,res)=>{
    res.send("hello durrani!...")
})
app.get('/express',(req,res)=>{
    res.send("this is express...")
})
app.listen(process.env.PORT,()=>{
    console.log(`ëxample app listening on port ${port}` )
})