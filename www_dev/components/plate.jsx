var React = require('react');
var requests = require('../util/requests');

/**
 * Component: Program Pane
 */

module.exports = React.createClass({


	getInitialState: function(){
    return {
      waiting: true,
      state: null,
      plate_id: null
    };
	},

  componentWillMount: function(){
    console.log(requests);

    requests.testCALL(function(err, data){
      console.log('Testing Request', err, data);
    });
  },

  render: function() {

  	var props = this.props;
  	var state = this.props.params.splat;
  	var plate_id = this.props.params.plate_id;

  	console.log("PROPS", props);

    return (
      <div className="plate_container">
        <div className="plate">
         <div className="plate__state">{state.toUpperCase()}</div>
         <div className="plate__id">{plate_id.toUpperCase()}</div>
        </div>
        
      </div>
    );
  },
});
