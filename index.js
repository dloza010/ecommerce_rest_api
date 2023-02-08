const express = require('express');
const app = express();

const loaders = require('./loaders');

const { PORT } = require('./config');

async function startServer() {

  // Init application loaders
  loaders(app);
  app.use(express.json());
  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
}

startServer();