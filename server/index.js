const path = require('path');
const delay = require('express-delay');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares)
  .use(delay(500, 1500))
  .use(bodyParser.json())
  .get('/message', (req, res) => {
    res.status(200)
      .json({
        message: 'Hello World!',
      });
  })
  .use(router)
  .listen(3001, () => {
    console.log('JSON Server is running');
  });
