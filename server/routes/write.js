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
    write.save((err, write) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success : true })
    })
})

router.get('/getContentList', (req, res) => {
    Write.find().populate('writer')
        .exec((err, board) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, board })
        }) 
})

router.get('/getContentList/:id', auth, (req, res) => {
    
})

module.exports = router