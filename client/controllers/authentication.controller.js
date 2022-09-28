const catcher = require('../../lib/utils/catcher');
const Client = require('../../database/models/client.model.js');
const admin = require('../../firebase/index');
// const { userSignUp } = require('../mailing/gmail');
require('dotenv').config({
  path: '../.env',
});

module.exports.register = catcher(async (req, res, next) => {
  const { name, email, phoneNo, photo, isAdmin } = req.body;
  console.log(phoneNo);
  const { authorization } = req.headers || '';

  const identity = await admin.auth().verifyIdToken(authorization);

  if (!identity)
    return next(
      new Error('Please signup in firebase before registration.', 401)
    );
  // console.log('+91' + phone);
  phoneNo == undefined
    ? await admin.auth().updateUser(identity.uid, {
        displayName: name,
        phoneNumber: phoneNo,
        photoURL:
          photo ||
          'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1659617314~hmac=f7cfe60919c3726ee8905b15a2790c8f',
      })
    : await admin.auth().updateUser(identity.uid, {
        displayName: name,
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
    phoneNo,
    photo,
    isAdmin,
    uid: identity.uid,
  });
  console.log(process.env.mailEmail);
  await userSignUp({
    from: process.env.mailEmail,
    to: email,
    subject: 'Vedify Ayurvedics',
    template: 'signUp',
    templateVars: {
      emailAddress: email,
      name: name,
    },
  });
  res.status(200).json({
    status: 'success',
    data: client,
    message: 'Client registered successfully',
  });
});

module.exports.whoami = catcher(async (req, res, next) => {
  const  authorization  = String(req.body.authorization);
  const identity = await admin.auth().verifyIdToken(authorization);
  console.log(identity);

  if (!identity) return next(new Error('Please signup with firebase.', 401));

  await admin.auth().setCustomUserClaims(identity.uid, {
    type: 'CLIENT',
  });

  const client = await Client.findOne({
    uid: identity.uid,
  });
  console.log("Client:",client)
  res.status(200).json({
    status: 'success',
    data: client,
    message: 'Client registered successfully',
  });
});
