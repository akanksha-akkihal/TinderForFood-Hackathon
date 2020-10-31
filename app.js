const express = require('express');
const app= express()
const port=5000

app.set('view engine','ejs');
app.listen(port);

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/rest-page',(req,res)=>{
  res.render('restPage');
})

app.get('/chat',(req,res)=>{
  res.render('chatroom');
})

app.get('/bill',(req,res)=>{
  res.render('billsplit');
})

app.get('/react/',(req,res)=>[
  res.render('search')
])