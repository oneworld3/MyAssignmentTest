//express
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
//router
const router = express.Router();

//Path
const path = require('path');

//authentication
const authentication = require('./__routes/authentication')(router);

//mongoose
const mongoose = require('mongoose');

//database data
const config = require('./__config/database');

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

//body parser middle ware
app.use(bodyParser.urlencoded({extended:false}))

//
app.use(bodyParser.json());

//provide access to the the front end so that it is smoother and faster
app.use(express.static(path.join(__dirname + '/../frontend/dist/frontend/')));

//authenticate api
app.use('/authentication',authentication);

//any url
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/../frontend/dist/frontend/index.html')); //sending the index file
});

//localhost 8080 port
app.listen(8080, ()=> {
    console.log('listening on port 8080');
});