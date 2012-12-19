exports.credentials = credentials = {};

// Implement Login
exports.login = function(creds) {
    credentials = creds;
};

// Add modules
exports.lists = require('./modules/lists');
exports.mailer = require('./modules/mailer');
exports.log = require('./modules/log');