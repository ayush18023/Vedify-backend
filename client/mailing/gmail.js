const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs');
const juice = require('juice');
require('dotenv').config({
  path: '../../.env',
});

let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: process.env.mailEmail,
    pass: process.env.mailPassword,
  },
});

const userSignUp = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = `mailing/templates/${templateName}.html`;
  const options = {
    ...restOfOptions,
  };

  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, templateVars);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
  }
  console.log('Successfully reached end');
  return transporter.sendMail(options);
};

module.exports = { userSignUp };
