var $ = require('jquery');

var apiURL = 'https://fender-api.automatic.co/'

module.exports = {
    
    testRequest: 'HIIIIIII',

    testCALL: function(state, plate_id, cb) {
        var _this = this;
        var errorMessage = 'Error creating your Automatic account. Please try again.';

        $.ajax({
            url: apiURL + state + '/' + plate_id,
            type: 'GET',
            datatype: 'json',
            success: function(data) {
                console.log('Plate Data:', data);
                cb(null, data);
            },

            error: function(jqxhr, textStatus, err) {
                console.error('Error Creating Account', jqxhr);
                cb(new Error(errorMessage), null);
            }
        });
    },
};
