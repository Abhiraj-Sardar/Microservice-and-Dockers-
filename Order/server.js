const express = require('express');
const app = express();
const PORT = 3003;
const data = require('./orderDB.json');

app.get('/order',(req,res)=>{
    console.log("This is order...");
    res.send(data); //sending as object
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})