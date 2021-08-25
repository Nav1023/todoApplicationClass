const express = require('express');
const app = express();
const todoRoute = require('./routes/todo');
const bodyParser = require('body-parser');

// parsing the application/json
app.use(bodyParser.json());


//middleware 
const logger = (req, res, next) => {
  console.log('Logging the values');
  req.name = 'Navneet';
  next();
}
app.use(logger);

app.use('/api/todo/', todoRoute);
app.use('/static/', express.static('public'));
app.use('/images/', express.static('public/images'));


app.get('*', (req, res) => {
  res.status(400);
  console.log(`Sorry this url does not exist`);
  res.send('Sorry this url does not exist');
})

app.listen(9000, () => {
  console.log('Server is listening to port 9000')
});
