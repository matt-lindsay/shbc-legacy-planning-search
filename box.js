var BoxSDK = require('box-node-sdk');

var boxClient = function () {
    var clientID = process.env.CLIENTID;
    var clientSecret = process.env.CLIENTSECRET;
    var token = process.env.ACCESSTOKEN;
    
    var sdk = new BoxSDK({
        clientID: clientID,
        clientSecret: clientSecret
    });

    // Create a basic API client
    var client = sdk.getBasicClient(token);
    // Return the client to the app.
    return client;
};
module.exports = boxClient;