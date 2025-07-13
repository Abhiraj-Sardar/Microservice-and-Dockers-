const express = require('express');
const app = express();
const PORT = 3002;
const data = require('./productDB.json');

app.get('/product',(req,res)=>{
    console.log("This is Product...");
    res.send(data); //sending as object
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})