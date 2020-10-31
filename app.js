const express = require('express');
const app= express()
const port=5000

app.set('view engine','ejs');
app.listen(port);

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index',{title: "Welcome"});
});

app.get('/rest-page',(req,res)=>{
  res.render('restPage',{title: "Inside Restaurant"});
})

app.get('/chat',(req,res)=>{
  res.render('chatroom',{title: "chatroom"});
})

app.get('/bill',(req,res)=>{
  res.render('billsplit',{title:"Bill split"});
})

app.get('/react',(req,res)=>[
  res.render('search',{title:"Maps"})
])