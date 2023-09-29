const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {body, validationResult} = require('express-validator');

const Stat = require('../../models/Stat');
const User = require('../../models/User');

router.get('/',auth, async (req, res) => {

    try{
        const stats = await Stat.findOne({user:req._id});
        res.json(stats);       
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }  
});

router.put('/points', [auth,[ 
    body('points', 'Points are required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   console.log("Points:",req.body.points);
    try{

        const { points} = req.body;
        const newPoints = {       
            points
        };
        
        console.log("Shifted Points:", newPoints);
        const stat = await Stat.findOne({user:req._id});
        stat.vitalityPoints.unshift(newPoints);
        await stat.save();
 
        res.json(stat);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.put('/weight', [auth,[ 
    body('weight', 'Weight is required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    try{

        const { weight} = req.body;
        const newStat= {
            amount: weight
        };
        console.log("Shifted Points:", newStat);
        const stat = await Stat.findOne({user:req._id});
        stat.weight.unshift(newStat);
        await stat.save();
    
        res.json(stat);

    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.put('/workout', [auth,[ 
    body('workout', 'Workout is required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   console.log("Workout:",req.body.workout);
    try{

        const { workout} = req.body;
        const newWorkout = {
                name:workout.name,
                reps:workout.reps,
                time:workout.time || 0,
            };
        console.log("Shifted Workout:", newWorkout);
        const stat = await Stat.findOne({user:req._id});
        stat.workout.unshift(newWorkout);
        await stat.save();
        res.json(stat);

    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get('/workouts', auth, async (req, res) => {
    try {
        const workouts = await Stat.workout.find({user:req._id}).sort({date:-1});
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     
    }

});


module.exports = router;
