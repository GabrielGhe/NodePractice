/*** @jsx React.DOM */
"use strict";

var PersonApp = React.createClass({displayName: 'PersonApp',
  render: function(){
    return (
      React.DOM.h1(null, "React works")
    );
  }
});

React.renderComponent(PersonApp(null ), document.getElementById('first'));