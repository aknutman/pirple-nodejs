var helpers = require('../helpers');

var index = require('./htmlHandlers/index');
var accountCreate = require('./htmlHandlers/accountCreate');
var sessionCreate = require('./htmlHandlers/sessionCreate');
var sessionDeleted = require('./htmlHandlers/sessionDeleted');
var accountEdit = require('./htmlHandlers/accountEdit');
var accountDeleted = require('./htmlHandlers/accountDeleted');
var checksCreate = require('./htmlHandlers/checksCreate');
var checksList = require('./htmlHandlers/checksList');
var checksEdit = require('./htmlHandlers/checksEdit');
var favicon = require('./htmlHandlers/favicon');
var public = require('./htmlHandlers/public');

var htmlHandlers = {};

htmlHandlers.index = index;

htmlHandlers.accountCreate = accountCreate;

htmlHandlers.sessionCreate = sessionCreate;

htmlHandlers.sessionDeleted = sessionDeleted;

// Edit your account
htmlHandlers.accountEdit = accountEdit;

// Account has been deleted
htmlHandlers.accountDeleted = accountDeleted;

// Create a new check
htmlHandlers.checksCreate = checksCreate;

// Dashboard (view all checks)
htmlHandlers.checksList = checksList;

// Edit a check
htmlHandlers.checksEdit = checksEdit;

// Favicon
htmlHandlers.favicon = favicon;

// Public assets
htmlHandlers.public = public;

module.exports = htmlHandlers;