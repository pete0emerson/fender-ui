var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

// Utilities
var requests = require('../util/requests');

var Plate = require('./plate.jsx');
var Home = require('./home.jsx');

/**
 * App Component
 */

var App = React.createClass({

  getInitialState: function() {
    return {
      plate: null
    };
  },

  render: function() {

    return (
      <div className="main">
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
        <Route path="**/:plate_id" component={Plate} />      
        <IndexRoute component={Home} />      
    </Route>
  </Router>
), document.getElementById('appContainer'))


/**
 * Handle routing and attach app to DOM
 */

// var routes = (
//   <Route name="app" handler={App} path="/">
//     <Route name="plate" path="**/:plate_id" compone={Plate} />
//     <DefaultRoute handler={Home} />
//   </Route>
// );

// Router.run(routes, function(Handler) {
//   React.render(<Handler/>, document.getElementById('appContainer'));
// });

module.exports = App;