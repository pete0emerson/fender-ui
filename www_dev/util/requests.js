var $ = require('jquery');

var apiURL = 'https://fender-api.automatic.co/'

var itemsTest = {
  "items": [{
    "license_plate": "123XYZ",
    "msg": " Hello testing testing",
    "state": "California",
    "timestamp": "2015-11-13 22:02:27",
    "emojis": ["U287t2", "U297y2kjh"]
  }, {
    "license_plate": "123XYZ",
    "msg": " Hello testing testing",
    "state": "California",
    "timestamp": "2015-11-13 22:22:56"
  }, {
    "license_plate": "123XYZ",
    "msg": " You're driving is amazing thank you for being careful",
    "state": "California",
    "timestamp": "2015-11-13 22:41:43"
  }]
};

module.exports = {

  testCALL: function(state, plate_id, cb) {

    var _this = this;
    var errorMessage = 'Error creating your Automatic account. Please try again.';
    var messages = [];
    var emojis = {};
    var returnData = {};

    $.ajax({
      url: apiURL + state + '/' + plate_id,
      type: 'GET',
      datatype: 'json',
      success: function(data) {

        var emojiList;
        var i, j;

        for (i = 0; i < data.items.length; i++) {

          messages.push({
            msg: data.items[i].msg,
            timestamp: data.items[i].timestamp
          });

          if (data.items[i].emojis && data.items[i].emojis.length > 0) {

            emojiList = data.items[i].emojis;

            for (j = 0; i < emojiList.length; i++) {
              if (emojis[emojiList[i]]) {
                emojis[emojiList[i]]++;
              } else {
                emojis[emojiList[i]] = 1;
              }
            }
          }
        }

        console.log('Plate Data:', data);
        cb(null, {
          messages: messages,
          emojis: emojis
        });
      },

      error: function(jqxhr, textStatus, err) {
        console.error('Error Creating Account', jqxhr);
        cb(new Error(errorMessage), null);
      }
    });
  }
};
