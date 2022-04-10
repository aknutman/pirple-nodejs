module.exports = function (strLength) {
    strLength =
        typeof (strLength) == 'number' &&
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