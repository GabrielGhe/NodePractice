/*** @jsx React.DOM */
"use strict";

var data = [
  {first:"Vush", last: "Ky"},
  {first:"Dai", last: "Sy"},
  {first:"Ja", last: "Ky"}
];


var Person = React.createClass({displayName: 'Person',
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h2(null, this.props.last,", ", this.props.first)
      )
    )
  }
});// End Person


var PersonList = React.createClass({displayName: 'PersonList',
  render: function(){
    var people = this.props.data.map(function(person){
      return Person( {first:person.first, last:person.last} )
    });// End People

    return (
      React.DOM.div(null, 
        people
      )
    );
  }
});// End PersonList


var PersonApp = React.createClass({displayName: 'PersonApp',
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "This is the person App"),
        PersonList( {data:this.props.data} )
      )
    );
  }
});// End PersonApp


React.renderComponent(PersonApp( {data:data} ), document.getElementById('first'));