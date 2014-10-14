/*** @jsx React.DOM */
"use strict";

var PersonApp = React.createClass({displayName: 'PersonApp',
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "This is the person App"),
        Person( {first:"Vush", last:"Ky"} ),
        Person( {first:"Dai", last:"Sy"} ),
        Person( {first:"Ja", last:"Ky"} )
      )
    );
  }
});

var Person = React.createClass({displayName: 'Person',
  render: function(){
    return (
      React.DOM.div(null, 
        this.props.first, " - ", this.props.last
      )
    );
  }
});

React.renderComponent(PersonApp(null ), document.getElementById('first'));