const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const express = require('express');

const router = express.Router();
const authToken = config.get('auth_secret');

const users = [];

function Routes() {
  router.post('/register', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = {
      id: Math.random() * 10, // not safe
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    users.push(user); // write user to database

    // create a token
    const token = jwt.sign({ id: user.id }, authToken, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token });
  });
}

module.exports = Routes;
