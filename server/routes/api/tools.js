const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {body, validationResult} = require('express-validator');

const Stat = require('../../models/Stat');

router.get('/',auth, async (req, res) => {

    try{
        
        res.json({msg:'Got to tools'});
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
});

module.exports = router;

