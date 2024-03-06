const mongoose = require('mongoose')
const turnSchema = new mongoose.Schema({
    turnDate: {
        type: mongoose.Schema.Types.Date,
        default: () => new Date() + 7 * 24 * 60 * 1000
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    start: {
        hour: {
            type: Number,
            required: true
        },
        minutes: {
            type: Number,
            required: true
        }
    },
    end: {
        hour: {
            type: Number,
            required: true
        },
        minutes: {
            type: Number,
            required: true
        }
    },
    description: {
        type: [String],
        enum:["טיפול פנים","גבות","שפם"],
        required: true
    },
    notes: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Turn', turnSchema)