import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

class HelloWorld extends React.Component {
  render() {
    return (
      <div class="section no-pad-bot" id="index-banner">
  <div class="container">

    <h1 class="header center orange-text">Hello User</h1>
    <div class="row center">
      <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
    </div>
    <div class="row center">
      <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light  light-blue lighten-2">Get Started</a>
    </div>
  
  </div>
</div>
    );
  }
}


Meteor.startup(() => {
    ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
});
