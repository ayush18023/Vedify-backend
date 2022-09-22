require('../lib/utils/global');

require('dotenv').config({
  path: '../.env',
});

require('../firebase/index');

// const { Client } = require('@googlemaps/google-maps-services-js');

// global.client = new Client({
//   config: {
//     key: process.env.GOOGLE_API,
//     components: 'country:IN',
//   },
// });

const cluster = require('cluster');
const os = require('os');

const app = require('./app');

const port = process.env.PORT_CLIENT || 4000;

process.env.UV_THREADPOOL_SIZE = os.cpus().length;

const clusterWorkerSize = os.cpus().length;

console.log(L('UV_THREADPOOL_SIZE'), C(process.env.UV_THREADPOOL_SIZE));
console.log(L('Cluster Worker Size'), C(clusterWorkerSize));

app.listen(port, () => {
  console.log(
    L(`Client Server on PORT : '${port}' `),
    D(`${new Date().toLocaleString()}`),
    C(` Mode - ${process.env.NODE_ENV}  `)
  );
});
