const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

//gateway for account
app.get('/v1/account',async (req,res)=>{
    const response = await axios.get('http://172.17.0.2:3001/account'); //172.17.0.3 is the ipaddress of the container in which account endpoint is running // ipaddress can be found by the CMD docker inspect <container-id> 
    console.log(response.data);
    res.send(response.data);
});

//gateway for product
app.get('/v1/product',async (req,res)=>{
    const response = await axios.get('http://172.17.0.5:3002/product'); //172.17.0.5 is the ipaddress of the container in which account endpoint is running // ipaddress can be found by the CMD docker inspect <container-id> 
    res.send(response.data);
});

//gateway for order
app.get('/v1/order',async (req,res)=>{
    const response = await axios.get('http://172.17.0.4:3003/order');  //172.17.0.4 is the ipaddress of the container in which account endpoint is running // ipaddress can be found by the CMD docker inspect <container-id> 
    console.log(response.data);
    res.send(response.data);
});

//gateway for payment
app.get('/v1/payment',async (req,res)=>{
    const response = await axios.get('http://172.17.0.3:3004/payment'); //172.17.0.4 is the ipaddress of the container in which account endpoint is running // ipaddress can be found by the CMD docker inspect <container-id> 
    console.log(response.data);
    res.send(response.data);
});


//NOTE: this ipaddresses may can change when we delte the container and start a new container

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})