/**
 * Helpers for various tasks
 * 
 */

// Dependencies
var crypto = require('crypto');
var config = require('./config');

// Container for all the helpers
var helpers = {};

// Create a SHA256 hash
helpers.hash = function(str) {
    if (typeof(str) == 'string' && str.length > 0) {
        var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');

        return hash;
    } else {
        return false;
    }
};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(str) {
    try {
        var obj = JSON.parse(str);

        return obj;
    } catch (e) {
        return {};
    }
}

// Create a string of random alphanumeric charachters, of a given length
helpers.createRandomString = function(strLength) {
    strLength =
        typeof(strLength) == 'number' &&
        strLength > 0 ?
        strLength :
        false;

    if (strLength) {
        // Define all the possible charachter that could fo into a string
        var possibleCharachters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // Start the final string
        var str = '';
        for (i = 1; i <= strLength; i++) {
            // Get a random charachter from the possibleCharachters string
            var randomCharachter =
                possibleCharachters
                .charAt(Math.floor(Math.random() * possibleCharachters.length));

            // Append this charachter to the final string
            str += randomCharachter;
        };

        // Return the final string
        return str;
    } else {
        return false;
    }
};

module.exports = helpers;