const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    friends:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Friend = mongoose.model('friend', FriendSchema);