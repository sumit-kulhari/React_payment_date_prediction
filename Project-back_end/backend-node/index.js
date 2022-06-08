const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/admin'

const index = express()


mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log('Connected...')
})

index.use(express.json())

const hrcRouter = require('./routes/hrc')
index.use("/hrc",hrcRouter)

index.listen(9000,()=>{
    console.log('Server started')
})