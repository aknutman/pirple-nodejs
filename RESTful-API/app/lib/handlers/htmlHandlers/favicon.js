var helpers = require('../../helpers');

module.exports = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method == 'get') {
        // Read in the favicon's data
        helpers.getStaticAsset('public/favicon.ico', function (err, data) {
            if (!err && data) {
                callback(200, data, 'favicon');
            } else {
                callback(500);
            }
        })
    } else {
        callback(405);
    }
};