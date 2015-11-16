var React = require('react');
var requests = require('../util/requests');

var emojiArray = ['😄', '😡', '😡', '😡', '😡', '😡'];


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

    function makeCall(){
      requests.testCALL(state, plate_id, function(err, data){
     
        _this.setState({
          waiting: false
        })

        if(!err){
          _this.setState({
            emojis: data.emojis,
            messages: data.messages
          });
        }

        console.log('Testing Request', err, data);

      });
    }

    makeCall();

    setInterval(makeCall, 3000);
  },

  render: function() {

  	var state = this.props.params.splat;
  	var plate_id = this.props.params.plate_id;
    var plate_id_firstHalf = plate_id.slice(0, Math.floor(plate_id.length/2));
    var plate_id_lastHalf = plate_id.slice(Math.floor(plate_id.length/2), plate_id.length);
    var emojis = this.state.emojis;
    var messages = this.state.messages;

    var emojiList = null;
    var emojiView = null;

    var messageView = null;
    var messageList = null;

    var randomEmoji = null;

    if(emojis && emojis.length > 0){
      randomEmoji = emojis[0].emoji;
    } else {
      randomEmoji = '😄';
    }

    var plate = (

      <div className="plateMain">
        <img src="/static/image/plate_bg.svg" alt="Fender"/>
        <div className="plateBody">
          <div className="plate__state">{state.toUpperCase()}</div>
          <h1 className="plateText">{plate_id_firstHalf.toUpperCase()}<span className="plateEmoji">{randomEmoji}</span>{plate_id_lastHalf.toUpperCase()}</h1>
        </div>          
      </div>
    );

    if(emojis && emojis.length > 0){

      console.log('HAS SUPER EMOJIS');
      emojiList = [];
      
      for (var i = 0; i < emojis.length; i++){
        emojiList.push(<li key={i} className="emojiListItem">{emojis[i].emoji.replace(/ /g, '\\x')} <span className="emojiCount">{emojis[i].count}</span></li>)
      }
        
    
      // for (var emojiName in emojis){
      //   emojiList.push(<li key={emojiName} className="emojiListItem">{emojiName.replace(/ /g, '\\x')} <span className="emojiCount">{emojis[emojiName]}</span></li>)
      // } 

      emojiView = (
        <ul className="emojiList">
          {emojiList}
        </ul>
      );
    }

    if(messages && messages.length > 0){
      messageList = [];
      for (var i = 0; i < messages.length; i++){
        messageList.push(
          <li key={i} className="messageListItem">
            <p className="message">{messages[i].msg}</p>
            <p className="timestamp">{messages[i].timestamp}</p>  
          </li>
        )
      }       

      messageView = (
        <div>
          <h3 className="messageHeader">Messages</h3>
          <ul className="messageList">
            {messageList}
          </ul>
        </div>
      );
    } else {
       messageView = (
        <div>
          <h3 className="messageHeader">No Messages</h3>          
        </div>
      );
    }

    return (
      <div className="plate_home">
        <div className="plateContainer">
          {plate}        
          {emojiView}
          {messageView}
        </div>
      </div>
    );
  },
});
