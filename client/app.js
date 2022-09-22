require('dotenv').config({
  path: './.env',
});

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const error_handler = require('../lib/handlers/error.handler');
const { errorSaver } = require('../lib/utils/error_saver');
require('../firebase/index');

const admin = require('../firebase/index');
require('../database');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./client.yaml');

// const error_handler = require('./handlers/error.handler');

const _Error = require('../lib/utils/_error');

const origin = ['http://localhost:3000/', 'http://localhost:3000'];

const app = express();

//* Security middleware
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000,
  })
);
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//* to add cookies if CORS
app.use(
  cors({
    origin,
    credentials: true,
  })
);

//*  Express Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
// app.use(csrfMiddleware);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // ? Middleware to show req and res details.
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//* Serving Documentation HTML file
app.use(express.static(`${__dirname}/public`));

//* Routes handling
app.use('/api/v1/', require('./routes'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(error_handler);

//* Error handling middleware
app.all('*', async (req, res, next) => {
  // await errorSaver(req, 'client');
  next(new _Error(`Can't find ${req.path} :(`, 404));
});

module.exports = app;
