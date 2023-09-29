const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    weight:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    workout:[       
        {
            name: {
                type: String,
            },
            reps: {
                type: Number,
            },
            time: {
                type: Number,
            },
            date : {
                type: Date,
                default: Date.now
            }
        }
    ],
    calories:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    steps:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    vitalityPoints:[
        {
            points: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    date:{
        type: Date,
        default: Date.now
    },
    totalVitalityPoints:{
        type: Number,
    },
});

module.exports = Stat = mongoose.model('stat', StatSchema);