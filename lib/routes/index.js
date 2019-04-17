const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const bodyParser = require('body-parser');

const express = require('express');

const router = express.Router();
const authToken = config.get('auth_secret');

const users = [];

function Routes() {
  router.post('/register', bodyParser.urlencoded({ extended: false }), (req, res) => {
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

  router.get('/me', bodyParser.json(), bodyParser.urlencoded({ extended: false }), (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
      res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, authToken, (err, decoded) => {
      if (err) {
        res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      }
      const userId = decoded.id;

      users.forEach((user) => {
        if (user.id === userId) {
          res.json(user);
        }
      });
    });
  });

  router.post('/login', bodyParser.json(), bodyParser.urlencoded({ extended: false }), (req, res) => {
    users.forEach((user) => {
      if (user.email === req.body.email) {
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
          return res.status(401).send({ auth: false, token: null });
        }

        const token = jwt.sign({ id: user.id }, authToken, {
          expiresIn: 86400, // expires in 24 hours
        });
        return res.status(200).send({ auth: true, token });
      }
      return res.status(401).send({ auth: false, message: 'Failed to authenticate.' });
    });
  });

  return router;
}

module.exports = Routes;
