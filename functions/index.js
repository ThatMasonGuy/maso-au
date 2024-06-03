// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUser = require('./createUser');
exports.fetchApiKey = require('./fetchApiKey')