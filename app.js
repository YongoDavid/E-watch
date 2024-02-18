const express = require('express');
const app = express();
const morgan = require('morgan');
// const { Static } = require('vue');
app.use(morgan('dev'))
app.listen(5500);


app.use(express.static('styles'))
app.use((req,res,next)=>{
    console.log('Server started')

    next()
});

// ROUTES
app.get('/' , (req,res)=>{
    res.sendFile('index.html' , {root: __dirname})
});
app.use((req,res)=>{
    res.sendFile('404.html' , {root: __dirname})
});