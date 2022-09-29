const express = require('express');
const {
  register,
  googleLogin,
} = require('../controllers/authentication.controller');
const { verify } = require('../controllers/authorization.controller');

const router = express.Router();

router.post('/register', register); //*  register a new client
router.post('/googleLogin', googleLogin);

//# create a route whoami
router.post('/whoami', verify, (req, res, next) => {
  console.log(req.ctx);
  res.status(200).json({
    status: 'success',
    data: req.ctx,
    message: `Hello, you are ${req.ctx.name}`,
  });
});

module.exports = router;
