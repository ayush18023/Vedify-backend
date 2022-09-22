const admin = require('../../firebase/index');
const catcher = require('../../lib/utils/catcher');
const Client = require('../../database/models/client.model');
const _Error = require('../../lib/utils/_error');

module.exports.verify = catcher(async (req, res, next) => {
  const { authorization } = req.headers || '';

  if (!authorization) {
    return next(new _Error('Please login to continue.', 401));
  }

  const identity = await admin.auth().verifyIdToken(authorization);

  if (!identity) return next(new _Error('Please login to continue.', 401));

  const client = await Client.findOne({
    $or: [
      {
        email: identity.email,
      },
      {
        phone: identity.phoneNumber,
      },
    ],
  });

  if (!client) return next(new _Error('Please try to register again', 404));

  req.ctx = client;
  req.identity = identity;

  next();
});

module.exports.dummy_verify = catcher(async (req, res, next) => {
  req.ctx = {
    _id: 'test',
  };

  next();
});

module.exports.verifyToken = catcher(async (req, res, next) => {
  const { authorization } = req.headers || '';

  if (!authorization) {
    return next(new _Error('Please login to continue.', 401));
  }

  const identity = await admin.auth().verifyIdToken(authorization);

  req.identity = identity;

  next();
});
