const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.post("/inquery",(req,res)=>{
    const data = req.body;
    console.log(data);
    res.send(`Form data received
        Username : ${data.username}
        Email : ${data.email}
        Number : ${data.number}
        Address : ${data.address}
        Message : ${data.message}`
    );
    
})

app.get("/",(req,res)=>{
    res.send("This is Server");
})

app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`);
})