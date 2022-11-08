const express = require('express');
const bodyParser =  require('body-parser');

const postsRoutes = require('./routes/posts');
// const userRoutes = require('./routes/users')

const app = express();


//body parser middleware configuration to parse incoming req stream and make it accessible
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Handling CORS issue by setting appropriate headers for all the incomming requests through middleware
app.use((req,res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

//passing postRouts to app to configure our route paths. Specifically for paths redirecting to "/api/posts"
app.use("/api/posts",postsRoutes);

module.exports = app;
