const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;
const data = require('./accountDB.json');

app.get('/account',(req,res)=>{
    console.log("This is Account Service");
    // const response = await axios.get('http://localhost:3002/product'); //calling the product api in /product 
    // console.log(data);
    // res.send({'data':'Hello from account'}); //sending as object
    res.send(data);
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})