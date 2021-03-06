var React = require('react');
var History = require('react-router').History;


var emojiArray = ['😄', '😄', '😡', '🖕', '💛', '👍', '👋', '💀'];

/**
 * Component: Program Pane
 */

module.exports = React.createClass({

  mixins: [ History ],

  getInitialState: function(){
    return {
      currentState: 'California'
    }
  },

  render: function() {

    var randomEmoji = emojiArray[ Math.floor(Math.random() * emojiArray.length)];

    return (
      <div className="fender__home">
        <div className="plateMain">
          <img src="/static/image/plate_bg.svg" alt="Fender"/>
          <div className="plateBody">
            <h1 className="plateText">FEN<span className="plateEmoji">{randomEmoji}</span>DER</h1>
          </div>          
        </div>
        <form onSubmit={this.submitForm}>
          <div className="licenseInput">            
            <label>Enter License Plate Number</label>
            <input type="text" placeholder="XXX XXX" ref="plate_id" autoFocus="true"></input>

            <label>Select License Plate State</label>
            <select className="selectState" ref="state" defaultValue="California">
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District Of Columbia">District Of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>           

          </div>
          <div className="submitContainer">
            <input className="button" type="submit" value="Search"/>
          </div>
        </form>
      </div>
    );
  },

  submitForm: function(event){
    event.preventDefault();
    var state = this.refs.state.value.trim();
    var plate_id = this.refs.plate_id.value.trim().toUpperCase();
    
    plate_id = plate_id.replace(' ', '');

    if (!state || !plate_id) {
      return;
    }
    // TODO: send request to the server

    console.log(state, plate_id);

    this.props.history.pushState(null, '/' + state + '/' + plate_id);

    return;
  }

});
