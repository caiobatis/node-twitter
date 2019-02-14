const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://caio:58340211caio@ds129085.mlab.com:29085/node-caio', {
  userNewUrlParser: true
})
app.use(express.json())

app.use(require('./routes'));

app.listen(3000, ()=> {
  console.info('Show man, rodando em 3000')
})