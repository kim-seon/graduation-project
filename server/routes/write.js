const express = require('express')
const router = express.Router()
const multer = require('multer')

const { Write } = require('../models/Write')
const { auth } = require('../middleware/auth')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).array('image')

router.post('/writeForm', auth, (req, res) => {
    const write = new Write(req.body)
    write.save((err) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success : true })
    })
})

module.exports = router