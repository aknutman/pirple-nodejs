/**
 * Helpers for various tasks
 * 
 */

// Dependencies
var crypto = require('crypto');
var config = require('./config');

var createRandomString = require('./helpers/createRandomString');
var interpolate = require('./helpers/interpolate')
var getStaticAsset = require('./helpers/getStaticAsset');
var addUniversalTemplates = require('./helpers/addUniversalTemplates');
var getTemplate = require('./helpers/getTemplate');
var sendTwilioSms = require('./helpers/sendTwilioSms');

// Container for all the helpers
var helpers = {};

// Sample for testing that simply returns a number
helpers.getANumber = function () {
    return 1;
}

// Create a SHA256 hash
helpers.hash = function (str) {
    if (typeof (str) == 'string' && str.length > 0) {
        var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');

        return hash;
    } else {
        return false;
    }
};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function (str) {
    try {
        var obj = JSON.parse(str);

        return obj;
    } catch (e) {
        return {};
    }
}

// Create a string of random alphanumeric charachters, of a given length
helpers.createRandomString = createRandomString;

// Send an SMS message via Twilio
helpers.sendTwilioSms = sendTwilioSms;

// Get the string content of a template
helpers.getTemplate = getTemplate;

// Add the universal header and footer to a string, and pass provided data object to the header and footer for interpolation
helpers.addUniversalTemplates = addUniversalTemplates;

// Take a given string and a data object and find/replace all the keys within it
helpers.interpolate = interpolate;

// Get the contents of a static (public) asset
helpers.getStaticAsset = getStaticAsset;


module.exports = helpers;