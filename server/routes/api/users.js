const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {body, validationResult} = require('express-validator');

const User = require('../../models/User');
//@route    Get API/users
//@desc     Test Route for now
//@access   Public
router.get('/', (req, res) => res.send('User Route'));

//@route    POST API/users
//@desc     register user
//@access   Public
router.post('/', 
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password','Please enter a password with 6 or more characters').isLength({min:6})
, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    console.log(req.body);

    const { name,email, password} = req.body;

    try{
        //See if user exists
        let user = await User.findOne({email });
        if (user){
            return res.status(400).json({errors:[{msg:'User already exists'}]});
        }
        //get users gravatar
        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d: 'mm'
        });
        
        user = new User({
            name,
            email, 
            avatar, 
            password
        });
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

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
            }
            );

        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
   
    
});


module.exports = router;
