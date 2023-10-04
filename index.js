const express = require('express');

const app = express();
const port = 3303;
app.get('/ping', (req, res)=>{
    try {
        console.log("Ping Testing...");
        return res.status(200).send({
            status : true,
            message : "Server is working !"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            status : false,
            message : err.message
        });
    }
})

app.listen(port , ()=>{
    console.log("Server is running on port ",port);
});