const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntegrationSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    google:[
        {
            userName:{
                type: String
            },
            password:{
                type: String
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ],
    apple:[
        {
            userName:{
                type: String
            },
            password:{
                type: String
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ],
    fitbit:[
        {
            userName:{
                type: String
            },
            password:{
                type: String
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ],
    amazon:[
        {
            userName:{
                type: String
            },
            password:{
                type: String
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Integration = mongoose.model('integration', IntegrationSchema);