const catcher = require('../../lib/utils/catcher');
const Client = require('../../database/models/client.model');
const admin = require('../../firebase/index');

module.exports.register = catcher(async (req, res, next) => {
  const { name, email, phone, photo } = req.body;
  const { authorization } = req.headers || '';

  const identity = await admin.auth().verifyIdToken(authorization);

  if (!identity)
    return next(
      new Error('Please signup in firebase before registration.', 401)
    );

  await admin.auth().updateUser(identity.uid, {
    displayName: name,
    phoneNumber: phone || 9999999999,
    photoURL:
      photo ||
      'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1659617314~hmac=f7cfe60919c3726ee8905b15a2790c8f',
  });

  await admin.auth().setCustomUserClaims(identity.uid, {
    type: 'CLIENT',
  });

  const client = await Client.create({
    name,
    email,
    phone,
    photo,
    uid: identity.uid,
  });

  res.status(200).json({
    status: 'success',
    data: client,
    message: 'Client registered successfully',
  });
});

module.exports.whoami = catcher(async (req, res, next) => {
  const { authorization } = req.headers || '';

  const identity = await admin.auth().verifyIdToken(authorization);

  if (!identity) return next(new Error('Please signup with firebase.', 401));

  await admin.auth().setCustomUserClaims(identity.uid, {
    type: 'CLIENT',
  });

  const client = await Client.findOne({
    uid: identity.uid,
  });

  res.status(200).json({
    status: 'success',
    data: client,
    message: 'Client registered successfully',
  });
});
