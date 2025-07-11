const express = require('express');
const app = express();
const PORT = 3004;

const data = require('../Database/paymentDB.json');

app.get('/payment',(req,res)=>{
    console.log("This is Payment");
    res.send(data); //sending as object
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})