/*** @jsx React.DOM */
"use strict";

var PersonApp = React.createClass({
  render: function(){
    return (
      <h1>React works</h1>
    );
  }
});

React.renderComponent(<PersonApp />, document.getElementById('first'));