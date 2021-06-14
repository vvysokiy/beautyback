const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')

const authorization = require('./src/routes/authorization');
const calendar = require('./src/routes/calendar');
const cosmeticBag = require('./src/routes/cosmetic-bag');


const app = express();
const port = 3001;

var corsOptions = {
  origin: ['http://localhost', 'http://localhost:3000', 'http://46.101.160.28'],
  methods: ['GET', 'PUT', 'POST'],
  credentials: true,
}

app
  .use(cors(corsOptions))
  .use(bodyParser.json())
  .use(cookieParser())
  .use((req, res, next) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
  })
  .get('/', (req, res) => {
    res.send('Hello World!!!')
  })
  .use(authorization)
  .use(cosmeticBag)
  .use(calendar)
  .listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })