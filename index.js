'use strict';

const express = require('express');
const config = require("config");
const mysql = require("promise-mysql");

const appSettings = config.get("application");
const dbConnectionOptions = config.get("database");

const app = express();
const port = appSettings.port;
const dbPool = mysql.createPool("dbConnectionOptions")

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));