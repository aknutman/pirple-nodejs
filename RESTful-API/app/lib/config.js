/**
 * Create and export configuration variables
 */

// Container for all the environtments
var environtments = {};

// Staging (default) environment
environtments.staging = {
    'httpPort': 3000,
    'httpsPort': 3001,
    'envName': 'staging',
    'hashingSecret': 'thisIsASecret',
    'maxChecks': 5
};

// Production environment
environtments.production = {
    'httpPort': 5000,
    'httpsPort': 5001,
    'envName': 'production',
    'hashingSecret': 'thisIsAlsoASecret',
    'maxChecks': 5
};

//Determine which environtment was passed as a command-line argument
var currentEnvirontment =
    typeof(process.env.NODE_ENV) == 'string' ?
    process.env.NODE_ENV.toLowerCase() :
    '';

// Check that the current environment is one of the environments above, if not, default to staging
var environmentToExport =
    typeof(environtments[currentEnvirontment]) == 'object' ?
    environtments[currentEnvirontment] :
    environtments.staging;

// Export the module
module.exports = environmentToExport;