const express = require('express')
const app = express()
const path = require('path')

//const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


const comments = [
  {
    id:1,
    username: "David",
    comment: "That is funny"
  },
  {
      id:2,
    username: "Mark",
    comment: "ha ha ha"
  },
  {
      id:3,
    username: "John",
    comment: "That is funny also"
  },
  { 
      id:4,
      username: "Mary", 
  comment: "That is funny as heck!" 
}
];

app.get('/comments',(req,res)=>{
    res.render("comments",{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('Comments/new')
})
app.post('/comments',(req,res)=>{
    const{username,comment} = req.body;
    comments.push({username,comment})
  //console.log(req.body)
  res.redirect('/comments')
})
app.get('/comments/:id',(req,res)=>{
   const{ id } = req.params;
   const comment = comments.find(c =>c.id === parseInt(id));
   res.render('comments/show',{comment})
})

/*app.get("/tacos",(req,res)=>{
  const{meat,qty}= req.body
  console.log(req.body)
  res.send(`Here are your ${qty} ${meat} burritos.Enjoy!`)
})*/

app.patch("/comments/:id",(req,res)=>{
  const{ id } = req.params;
  console.log(req.body.comment)
  res.send('Awesome!')
})

app.get('/profile/:name',(req,res)=>{
  console.log(req.params.name)
  res.send('You want to see '+ req.params.name +'?')
})


app.listen(7000,()=>{
    console.log('On 7000')
})