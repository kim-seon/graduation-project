const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./Config/key')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/users', require('./routes/users'))

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})