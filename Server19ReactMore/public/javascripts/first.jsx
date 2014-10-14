/*** @jsx React.DOM */
"use strict";

var data = [
  {first:"Vush", last: "Ky"},
  {first:"Dai", last: "Sy"},
  {first:"Ja", last: "Ky"}
];


var Person = React.createClass({
  render: function(){
    return (
      <div>
        <h2>{this.props.last}, {this.props.first}</h2>
      </div>
    )
  }
});// End Person


var PersonList = React.createClass({
  render: function(){
    var people = this.props.data.map(function(person){
      return <Person first={person.first} last={person.last} />
    });// End People

    return (
      <div>
        {people}
      </div>
    );
  }
});// End PersonList


var PersonApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <PersonList data={this.props.data} />
      </div>
    );
  }
});// End PersonApp


React.renderComponent(<PersonApp data={data} />, document.getElementById('first'));