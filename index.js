const express = require('express');

const app = express();

const PORT = 6000;

app.get('/',(req, res)=>{
    res.send('Hello Home!!')
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})