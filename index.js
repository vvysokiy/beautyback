const express = require('express');
const cookieParser = require('cookie-parser');

const authorization = require('./src/routes/authorization');
const cosmeticBag = require('./src/routes/cosmetic-bag');


const app = express();
const port = 3000;

app
  .use(cookieParser())
  .get('/', (req, res) => {
    res.send('Hello World!!!')
  })
  .use(authorization)
  .use(cosmeticBag)
  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })