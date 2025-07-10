const express = require('express');
const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send({'data':'Hello from Express'}); //sending as object
});

app.get('/user',(req,res)=>{
    res.send({'data':'Hello from user'}); //sending as object
});

app.get('/admin',(req,res)=>{
    res.send({'data':'Hello from Adminooooooo'}); //sending as object
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})