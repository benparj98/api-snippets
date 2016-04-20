// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACdc5f132a3c49700934481addd5ce1659';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.signingKeys.create({
    friendlyName: "User Jenny",
}, function(err, key) {
    process.stdout.write(key.sid);
    process.stdout.write(key.secret);
});
