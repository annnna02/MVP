const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('we made it!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})