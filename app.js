const express = require('express');

const app = express();

app.set('view engine', 'pug');

//create route route on app object
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?", hint:"Think about whose tomb it is." });
});

app.listen(3000, function(){
  console.log('port 3000 serving')
});