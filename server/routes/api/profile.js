const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {body, validationResult} = require('express-validator');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Friend = require('../../models/Friend');

//@route    Get API/profile/me
//@desc     get current user profile
//@access   Private (need token)
router.get('/me', auth, async (req, res) => {
    try{

        const profile = await Profile.findOne({
             user: req.user.id
            }).populate('user',['name','avatar']);
        
        if(!profile){
            return res.status(400).json({ msg:'There is no profile for this user'});

        }
        
        res.json(profile);


    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error ');
    }
});

//@route    Post API/profile/me
//@desc     Create or update current user profile
//@access   Private (need token)

router.post('/', [auth, [
    body('status', 'Status is required' ).not().isEmpty(),
    body('skills', 'Skills required').not().isEmpty()]
], async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const {
        website,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        location,
        bio,
        company,
        status
      } = req.body;
    // Build profile fields, will have to add social inserts later
    
    const profileFields = {
        user: req.user.id,
        website:
          website ,
        skills: Array.isArray(skills)
          ? skills
          : skills.split(',').map((skill) => ' ' + skill.trim()),
        bio: bio,
        company: company,
        status: status,
        location: location,

      };
    console.log(profileFields.skills);
    // profileFields.skills.forEach((skill) => console.log(skill));

    const socialFields ={ youtube, twitter, instagram, facebook, linkedin};
    /*
    for (const [key, value] of Object.entries(socialFields)) {
        if (value && value.length > 0)
          socialFields[key] = normalize(value, { forceHttps: true });
      }
      // add to profileFields
      */
    profileFields.social = socialFields;
    
    try{
        let profile = await Profile.findOne({ user:req.user.id });
        //update profile
        if(profile){
            
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id},
                { $set: profileFields},
                 {new: true}
            );
            return res.json(profile);
        }
        // Create profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }


    //console.log('Created');
    //res.status(200).send("Created");
});

//@route    Get API/profile/
//@desc     Get all profiles
//@access   Public (need token)

router.get('/', async (req,res)=>{
    try{
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//@route    Get API/profile/user/user_id
//@desc     Get profile by user id
//@access   Public (need token)

router.get('/user/:user_id', async (req,res)=>{
    try{
        const profile = await Profile.findOne({ user: req.params.user_id})
            .populate('user', ['name', 'avatar']);

        if(!profile) return res.status(400).json({msg: 'Profile not found'});

        res.json(profile);
    }catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            if(!profile) return res.status(400).json({msg: 'Profile not found'});
        }
        res.status(500).send("Server Error");
    }
});

//@route    Delete API/profile/
//@desc     Delete profile, user and posts
//@access   Private (need token)

router.delete('/', auth, async (req,res)=>{
    try{
        //Remove user's posts
        await Post.deleteMany({ user : req.user.id})
        //Removes profile
        await Profile.findOneAndRemove({user : req.user.id});
        //Remove user
        await User.findOneAndRemove({_id: req.user.id});
        res.json({msg: "User deleted"});
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//@route    PUT API/profile/experience
//@desc     Update part of a logged in profile
//@access   Private (need token)

router.put('/experience', [auth,[ 
    body('title', 'Title is required' ).not().isEmpty(),
    body('company', 'Company required').not().isEmpty(),
    body('from', 'From date required').not().isEmpty()]
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    try{
        const{
            title,
            company,
            location, 
            from, 
            current,
            to,
            description
        } =req.body;
        
        const newExp ={
            title,
            company,
            location,
            from, 
            to,
            current, 
            description
        }
        const profile = await Profile.findOne({user: req.user.id});
        //unshift pushes things to the beginning of the array so current experiences show up first

        profile.experiences.unshift(newExp);
        await profile.save();
        res.json(profile);
    }catch(err){
        
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//@route    DELETE API/profile/experience/:exp_id
//@desc     Delete singular experience
//@access   Private (need token)

router.delete('/experience/:exp_id', auth, async (req,res)=>{
    try{
        //get profile
        const profile =await Profile.findOne({user : req.user.id});

        //get removed index
        const removeIndex = profile.experiences.map(item => item.id).indexOf(req.params.exp_id);
        //find index above and then remove just that one below
        profile.experiences.splice(removeIndex, 1)

        await profile.save();
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//@route    PUT API/profile/education
//@desc     Update part of a logged in profile
//@access   Private (need token)

router.put('/education', [auth,[ 
    body('school', 'School is required' ).not().isEmpty(),
    body('degree', 'Degree required').not().isEmpty(),
    body('fieldofstudy', 'Field of Study required').not().isEmpty(),
    body('from', 'From date required').not().isEmpty()]
], async (req,res)=>{
    
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   
   
   
    try{
        const{
            school,
            degree,
            fieldofstudy, 
            from, 
            current,
            to,
            description
        } =req.body;
        
        const newEdu={
            school,
            degree,
            fieldofstudy,
            from, 
            to,
            current, 
            description
        }
        console.warn("We Got here");
        const profile = await Profile.findOne({user: req.user.id});
        //unshift pushes things to the beginning of the array so current education show up first
        profile.education.unshift(newEdu);
        await profile.save();
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//@route    DELETE API/profile/education/:exp_id
//@desc     Delete singular experience
//@access   Private (need token)

router.delete('/education/:edu_id', auth, async (req,res)=>{
    try{
        //get profile
        const profile =await Profile.findOne({user : req.user.id});

        //get removed index
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);
        //find index above and then remove just that one below
        profile.education.splice(removeIndex, 1)

        await profile.save();
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// To Do Add Friends route

module.exports = router;
