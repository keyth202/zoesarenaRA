const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
//connect db
connectDB();

//init middleware
app.use(express.json({extended:false}));

app.get('/', (req,res)=>res.send("API Running"));
app.get('/start', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
});

//define routes 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/tools', require('./routes/api/tools'));
app.use('/api/stats', require('./routes/api/stats'));
app.use('/api/integration', require('./routes/api/integration'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))