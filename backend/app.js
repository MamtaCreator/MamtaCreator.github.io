const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // a big middleware , applied to the incoming requests


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type ,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,PUT,OPTIONS")
  next();

})


//app.use((req, res, next) => {
//  console.log("1st middleware");
//  next();

//});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
   message : "Post added successfully",

  });
  
});

  app.get('/api/posts', (req, res, next) => {

  const posts = [
    {
      id: 'MamtaY2022',
      title: 'Mamta Yadav',
      content: 'This is Mamta Yadav currently working fullstack developer at CitiusTech',

    },

    {
      id: 'VijayY2022',
      title: 'Vijay Yadav',
      content: 'This is Viajy Yadav currently working as CRM at MRF',

    },

    {
      id: 'KetanY2022',
      title: 'Ketan Yadav',
      content: 'This is Mamta Yadav currently working fullstack developer at CitiusTech',

    }
  ];
  //res.json(posts);
  return res.status(200).json({
    Message: 'post fetched successfully',
    Posts: posts
  });


});

module.exports = app;
