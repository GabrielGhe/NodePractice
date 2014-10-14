/*** @jsx React.DOM */
"use strict";

var data = [
  {first:"Vush", last: "Ky"},
  {first:"Dai", last: "Sy"},
  {first:"Ja", last: "Ky"}
];

var PersonApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <PersonList data=this.props.data />
      </div>
    );
  }
});// End PersonApp


var PersonList = React.createClass({
  render: function(){
    var people = this.props.data.map(function(person){
      return (
        <Person first={person.first} last={person.last} />
      );
    });// End People


  }
});// End PersonList


var Person = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.first} - {this.props.last}
      </div>
    );
  }
});// End Person

React.renderComponent(<PersonApp data={data} />, document.getElementById('first'));