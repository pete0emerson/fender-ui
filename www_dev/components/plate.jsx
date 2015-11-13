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
      plate_id: null,
      info: null
    };
	},

  componentWillMount: function(){
    var _this = this;
    var state = this.props.params.splat;
    var plate_id = this.props.params.plate_id;

    console.log(requests);

    requests.testCALL(state, plate_id, function(err, data){
      if(!err){
        _this.setState({
          info: JSON.stringify(data)
        });
      }
      console.log('Testing Request', err, data);

    });
  },

  render: function() {

  	var props = this.props;
  	var state = this.props.params.splat;
  	var plate_id = this.props.params.plate_id;
    var info  = this.state.info;

  	console.log("PROPS", props);

    return (
      <div className="plate_container">
        <div className="plate">
         <div className="plate__state">{state.toUpperCase()}</div>
         <div className="plate__id">{plate_id.toUpperCase()}</div>
         <div className="comments">{info}</div>
        </div>
        
      </div>
    );
  },
});
