const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',async (req,res)=>{
    const response = await axios.get('http://172.17.0.3:3001/account'); //172.17.0.3 is the ipaddress of the container in which account endpoint is running // ipaddress can be found by the CMD docker inspect <container-id> 
    console.log(response.data);
    res.send(response.data);
});

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})