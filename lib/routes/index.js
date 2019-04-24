const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const bodyParser = require('body-parser');

const express = require('express');

const router = express.Router();
const authToken = config.get('auth_secret');

const users = [];

function Routes() {
  return router;
}

module.exports = Routes;
