/** @jsx React.DOM */
"use strict"

React.renderComponent(
  React.DOM.h1(null, "I am printing the title from react, works!"),
  document.getElementById('test')
);