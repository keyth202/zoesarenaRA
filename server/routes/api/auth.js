const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {body, validationResult} = require('express-validator');

const User = require('../../models/User');
//@route    Get API/auth
//@desc     Test Route for now
//@access   Public
router.get('/',auth, async (req, res) => {

    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
});

//@route    POST api/auth
//@desc     authenticate and get token
//@access   Public
router.post('/', 
    body('email', 'Please include a valid email').isEmail(),
    body('password','Password is required').exists()
, async (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    console.log(req.body.email);

    const { email, password} = req.body;

    try{
        //See if user exists
        let user = await User.findOne({email });
        if (!user){
            return res.status(400).json({errors:[{msg:'Invalid Credentials'}]});
        }
        //user is found check password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({errors:[{msg:'Invalid Credentials'}]});
        }


        //return jsonwebtoken
        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 36000},
            (err,token) => {
                if(err)throw err;
                res.json({token});
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
   
    
});


module.exports = router;
