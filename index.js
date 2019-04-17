

const express = require('express');
const config = require('config');

const Routes = require('./lib/routes/index.js');

const appSettings = config.get('application');
const routes = new Routes();

const app = express();
const { port } = appSettings;

app.get('/', (req, res) => res.send('Get Out'));
app.use('/api/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

process.on('SIGINT', () => {
  console.log('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  process.exit(0);
});
