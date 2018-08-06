'use strict';

 process.chdir(__dirname);

 if (process.env.NODE_ENV === 'development') {
   require('dotenv').config();
 }

 (() => {
   const strapi = require('strapi');
   strapi.start();
 })();
