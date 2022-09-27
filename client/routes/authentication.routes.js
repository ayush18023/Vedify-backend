const express = require('express');
const { register, whoami } = require('../controllers/authentication.controller');
const { verify } = require('../controllers/authorization.controller');
const admin = require('../../firebase/index');
const catcher = require('../../lib/utils/catcher');
const Client = require('../../database/models/client.model');
const _Error = require('../../lib/utils/_error');

const router = express.Router();

router.post('/register', register); //*  register a new client

//# create a route whoami
router.post('/whoami', whoami);

module.exports = router;
