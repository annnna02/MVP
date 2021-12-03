const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  axios.get('http://jservice.io/api/random')
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})