const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/account',async (req,res)=>{
    console.log("This is Account");
    const response = await axios.get('http://localhost:3002/product'); //calling the product api in /product
    console.log(response.data);
    // res.send({'data':'Hello from account'}); //sending as object
    res.send(response.data);
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})