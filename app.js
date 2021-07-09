const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {kindOfDay: day, newListItem: newItems})
});

app.post('/', (req, res) => {
  newItems.push(req.body.newItem);

  res.redirect('/');
});


app.listen(3000, () => {
  console.log('server is listening in port 3000');
});