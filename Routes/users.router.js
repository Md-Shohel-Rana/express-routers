const express = require('express');
const useRouter = express();





useRouter.get('/admin', (req,res)=>{
    res.send("<h1>I am a get ADMIN Router</h1>");
});

useRouter.get('/contact',(req,res)=>{
    res.send('I am a Contact Routers Request');
});

useRouter.get('/portfolio',(req,res)=>{
    res.send('I am a Portfolio Request Routers');
});


module.exports = useRouter;
