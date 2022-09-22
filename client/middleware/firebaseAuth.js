const admin = require('firebase-admin');
const catcher = require('../../lib/utils/catcher');
const _Error = require('../../lib/utils/_error');

module.exports.verifyIdToken = catcher(async (req, res, next) => {
  const { authorization } = req.headers;

  console.log('authorization', authorization);

  if (!authorization) {
    return next(new _Error('Authorization header is required', 401));
  }

  const identity = await admin.auth().verifyIdToken(authorization);

  if (!identity) {
    return next(new _Error('Please login again.', 401));
  }

  req.ctx = identity;

  next();
});

// module.exports.verifySessionCookie = catch_async(async (req, res, next) => {
//   const session = req.cookies['session'] || '';
//   const user = await admin.auth().verifySessionCookie(session, true);
//   req.ctx = { user };
//   next();
// });
