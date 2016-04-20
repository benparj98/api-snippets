// Download the twilio-csharp library from twilio.com/docs/csharp/install
using System;
using Twilio;
class Example 
{
  static void Main(string[] args) 
  {
    // Find your Account Sid and Auth Token at twilio.com/user/account
    string AccountSid = "ACda6f132a3c49700934481addd5ce1659";
    string AuthToken = "{{ auth_token }}";
    var twilio = new TwilioRestClient(AccountSid, AuthToken);

    var options = new MediaListRequest();
    
    var medias = twilio.ListMessageMedia("MM800f449d0399ed014aae2bcc0cc2f2ec", options);
    
    foreach (var media in medias.Medias)
    {
      Console.WriteLine(media.ContentType);
    }
  }
}