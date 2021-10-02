const express = require('express');
const jwt = require('jsonwebtoken');

const { verifyToken, deprecated } = require('./middlewares');
const { Domain, User, Post, Hashtag} = require('../models');

const router = express.Router();

router.use(deprecated);

module.exports = router;