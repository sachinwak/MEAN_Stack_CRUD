const express = require('express'),  
    path = require('path'),  
    bodyParser = require('body-parser'),  
    cors = require('cors'),  
    mongoose = require('mongoose'),  
    config = require('./config'),
    http = require('http');
    
let port = process.env.PORT || 3000; 

// add middleware
const app = express();  
app.use(bodyParser.json());  
app.use(cors());  

const server = http.createServer(app);

// connect to mongodb database
mongoose.Promise = global.Promise;  
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },  
    err => { console.log('Can not connect to the database'+ err)}  
);  

// add main route
const userRoute = require('./routes/user.route'); // user route
app.use('/users', userRoute);  

// listen on port 3000
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});