const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hbs=require('hbs');
const path=require('path');
const views_path=path.join(__dirname,'../templates/views')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine","hbs")
app.set("views",views_path)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get("/index",(req,res)=>{
  res.render("index")
})

const data = {
  "name" : "John Doe",
  "age" : 30,
}

app.get('/sample', (req, res) => {
    res.send('<h1>Hello World</h1><p>This is a sample route</p>');
})

app.get("/data", (req, res)=>
  
  res.json(data)
)

app.post("/submit", (req, res)=>
{
  console.log(req.body.username)
  res.send("Data received")
})


// Assignment: Create an express app to send data from frontend to backend by converting your existing calculator app which will perform the calculation in the express and display the output in the express itself.