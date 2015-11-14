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
          emojis: data.emojis,
          messages: data.messages
        });
      }
      console.log('Testing Request', err, data);

    });
  },

  render: function() {

  	var state = this.props.params.splat;
  	var plate_id = this.props.params.plate_id;
    var emojis = this.state.emojis;
    var messages = this.state.messages;

    var emojiList = null;
    var emojiView = null;

    var messageView = null;
    var messageList = null;

    var plate = (
      <div className="plate">
         <div className="plate__state">{state.toUpperCase()}</div>
         <div className="plate__id">{plate_id.toUpperCase()}</div>
      </div>
    );

    if(emojis){

      console.log('HAS SUPER EMOJIS');
      emojiList = [];
      for (var emojiName in emojis){
        emojiList.push(<li key={emojiName} className="emojiListItem">{emojiName.replace(/ /g, '\\x')} {emojis[emojiName]}</li>)
      } 

      emojiView = (
        <ul className="emojiList">
          {emojiList}
        </ul>
      );
    }

    if(messages){
      messageList = [];
      for (var i = 0; i < messages.length; i++){
        messageList.push(<li key={i} className="messageListItem"><p className="timestamp">{messages[i].timestamp}</p><p  className="message">{messages[i].msg}</p></li>)
      }       

      messageView = (
        <ul className="messageList">
          {messageList}
        </ul>
      );
    }

    return (
      <div className="plate_home">
        <h2>Fender</h2>
        {plate}        
        {emojiView}
        {messageView}
      </div>
    );
  },
});
