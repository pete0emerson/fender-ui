var React = require('react');
var History = require('react-router').History;


/**
 * Component: Program Pane
 */

module.exports = React.createClass({

  mixins: [ History ],

  render: function() {

    return (
      <div className="fender__home">
        <h1>Fender</h1>
        <form onSubmit={this.submitForm}>
          <select ref="state">
            <option value="California" >CA</option>
            <option value="Arizona">AZ</option>
          </select>
          <input type="text" ref="plate_id"></input>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  },

  submitForm: function(event){
    event.preventDefault();
    var state = this.refs.state.value.trim();
    var plate_id = this.refs.plate_id.value.trim();
    if (!state || !plate_id) {
      return;
    }
    // TODO: send request to the server

    console.log(state, plate_id);

    this.props.history.pushState(null, '/' + state + '/' + plate_id);

    return;
  }

});
