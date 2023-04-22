const express = require('express');
const app = express();
const useRouter = require('./users.router')

app.use('/api/user',useRouter);

app.get('/', (req,res)=>{
    res.send('<h1>Welcome app</h1>');
});

module.exports = app;