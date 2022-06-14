const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writeSchema = mongoose.Schema({
    index: {
        type: Number
    },
    Category: {
        type: String,
    },
    title: {
        type: String,
        maxlength: 30,
    },
    content: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    viewCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    writeDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Write = mongoose.model('Write', writeSchema);
module.exports = { Write };