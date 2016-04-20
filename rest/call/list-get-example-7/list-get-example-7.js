// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC5ef8732a3c49700934481addd5ce1659';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.calls.list({ from: "client:tommy" }, function(err, data) {
    data.calls.forEach(function(call) {
        console.log(call.Direction);
    });
});