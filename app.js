const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"/public");
app.set('view engine','hbs');
app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404err');
})

app.listen(3000,()=>{
    console.log("Running on port 3000");
})