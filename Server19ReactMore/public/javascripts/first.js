/*** @jsx React.DOM */
"use strict";

// var data = [
//   {first:"Vush", last: "Ky"},
//   {first:"Dai", last: "Sy"},
//   {first:"Ja", last: "Ky"}
// ];


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
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },
  onChangeFirst: function(e){
    this.setState({first: e.target.value});
  },
  onChangeLast: function(e){
    this.setState({last: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.state.data.push({ first:this.state.first, last:this.state.last});
    this.setState({first:'', last:''});
  },

  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "This is the person App"),
        React.DOM.form( {onSubmit:this.handleSubmit}, 
          React.DOM.input( {type:"text", value:this.state.first, onChange:this.onChangeFirst} ),
          React.DOM.input( {type:"text", value:this.state.last, onChange:this.onChangeLast} ),
          React.DOM.button( {type:"submit"}, "Add")
        ),

        PersonList( {data:this.state.data} )
      )
    );
  }
});// End PersonApp


React.renderComponent(PersonApp(null ), document.getElementById('first'));