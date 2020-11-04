const express = require('express')
const app =express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeonjin:9057coco@boilerplate.rtmn5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello'))

app.listen(port,() => console.log('Example on port ${port}'))