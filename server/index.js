const express = require('express')
const app = express()


const config = require('./Config/key')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})