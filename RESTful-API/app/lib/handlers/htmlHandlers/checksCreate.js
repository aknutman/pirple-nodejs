var helpers = require('../../helpers');

module.exports = function (data, callback) {
    // Reject any request that isn't a GET
    if (data.method == 'get') {

        // Prepare data for interpolation
        var templateData = {
            'head.title': 'Create a new Check',
            'body.class': 'checksCreate'
        };

        // Read in a template as a string
        helpers.getTemplate('checksCreate', templateData, function (err, str) {
            if (!err && str) {
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function (err, str) {
                    if (!err && str) {
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(502, undefined, 'html');
            }
        });
    } else {
        callback(405, undefined, 'html');
    }
};