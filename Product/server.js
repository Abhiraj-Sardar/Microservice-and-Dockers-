const express = require('express');
const app = express();
const PORT = 3002;

app.get('/product',(req,res)=>{
    console.log("This is Product");
    res.send({'data':'Hello from Product... 123'}); //sending as object
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})