var $ = require('jquery');

var apiURL = 'https://fender-api.automatic.co/'

module.exports = {
    
    testRequest: 'HIIIIIII',

    testCALL: function(cb) {
        var _this = this;
        var errorMessage = 'Error creating your Automatic account. Please try again.';

        $.ajax({
            url: apiURL + 'California/123ABC',
            type: 'GET',
            datatype: 'json',
            success: function(data) {
                console.log('TESTDATA', data);
                cb(null, data);
            },

            error: function(jqxhr, textStatus, err) {
                console.error('Error Creating Account', jqxhr);
                cb(new Error(errorMessage), null);
            }
        });
    },
};
