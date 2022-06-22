const express = require("express");
const app = express();
const path = require ("path");
const PORT = process.env.PORT||4000; 

app.use(express.static(path.resolve(__dirname,'./public')));

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'views/home.html'))
});

app.listen(4000,()=>{
    console.log(`http://localhost:${PORT}`)
});