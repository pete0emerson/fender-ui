var React = require('react');

/**
 * Component: Program Pane
 */

module.exports = React.createClass({

  render: function() {

    return (
      <div className="fender__home">
        <h1>Fender</h1>
        <form onSubmit=this.submitForm>
          <select>
            <option value="California">CA</option>
            <option value="Arizona">AZ</option>
          </select>
          <input type="text"></input>
          <button ></button>
        </form>
      </div>
    );
  },

  submitForm: function(event){
e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  }

});
