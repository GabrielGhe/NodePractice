NodeJS with ReactJS Components
============

<p>
  If you haven't already, look at how to initialize React here <a href="https://github.com/GabrielGhe/NodePractice/tree/master/Server18React">Server18React</a>
</p>

<p>
  React works with reusable components. They are similar to AngularJS directives in a way.
  We're going to be creating a person list.
</p>

```javascript
// ### in first.jsx ###

/** @jsx React.DOM */
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
```

<p>
  We created a PersonApp which has data. The PersonApp then creates a PersonList which displays a Person for
  every object in the data array. React uses this.props to access attributes on the component
  (like first, last and data). Lets remove data because it's static.
</p>

```javascript
// ### in first.jsx ###

// first remove the data array.
// Person doesn't change
// PersonList doesn't change


var PersonApp = React.createClass({
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },

  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <form>
          <input type="text" value={this.state.first} />
          <input type="text" value={this.state.last} />
          <button type="submit">Add</button>
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp

// notice we removed data on this line
React.renderComponent(<PersonApp />, document.getElementById('first'));
```

<p>
  It looks good but it would be nice to change the state of first and last when their associated input changes.
</p>

```javascript
// ### in first.jsx ###

var PersonApp = React.createClass({
  getInitialState: function(){
    return { data: [], first:"", last:"" };
  },
  onChangeFirst: function(e){
    this.setState({first: e.target.value});
  },
  onChangeLast: function(e){
    this.setState({last: e.target.value});
  },

  render: function(){
    return (
      <div>
        <h1>This is the person App</h1>
        <form>
          <input type="text" value={this.state.first} onChange={this.onChangeFirst} />
          <input type="text" value={this.state.last} onChange={this.onChangeLast} />
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp
```

<p>
  The state changes but we're not modifying the data array inside the state. We want to add the new person object to the array. We're going to accomplish this by adding an onSubmit event and handler to PersonApp
</p>

```javascript
// ### in first.jsx ###

var PersonApp = React.createClass({
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
      <div>
        <h1>This is the person App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.first} onChange={this.onChangeFirst} />
          <input type="text" value={this.state.last} onChange={this.onChangeLast} />
          <button type="submit">Add</button>
        </form>

        <PersonList data={this.state.data} />
      </div>
    );
  }
});// End PersonApp
```
