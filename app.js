const express = require('express');
const connect = require('./connect');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
const router = require('./router')
const port = 3000;

const startServer = async () => {
  await connect();

  const app = express();

  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set('view engine', hbs);

  app.use('/api/', router);

  app.get('/', (_, res) => {
    res.render('main.hbs');
  });

  app.listen(port, () => {
    console.log('Server is running on port', port);
  });
}

startServer();
