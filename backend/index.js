//express
const express = require ('express');
const app = express();

//Path
const path = require('path');

//mongoose
const mongoose = require('mongoose');

//database data
const config = require('./config/database');

//for the warning in the terminal
mongoose.Promise = global.Promise;

//connecting to the database using mongoose
mongoose.connect(config.uri, {useNewUrlParser: true}, (err)=>{
    if (err){
        console.log('Could NOT connect to the database: ', err);
    } else {
        console.log('Connected to the database!')
    }
});

//provide access to the the front end so that it is smoother and faster
app.use(express.static(path.join(__dirname + '/../frontend/dist/frontend/')));

//any url
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/../frontend/dist/frontend/index.html')); //sending the index file
});

//localhost 8080 port
app.listen(8080, ()=> {
    console.log('listening on port 8080');
});