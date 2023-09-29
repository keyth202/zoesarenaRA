const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WagerSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    wagers:[
        {
            wageruser1:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            wageruser2:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            wagerfromuser1:{
                type:Number
            },
            wagerfromuser2:{
                type: Number
            },
            date :{
                type: Date,
                default: Date.now
            },
            completeby :{
                type: Date
            },
            winner:{
                type:Schema.Types.ObjectId,
                ref:'user' 
            }
        }
    ]
});

module.exports = Friend = mongoose.model('wager', WagerSchema);