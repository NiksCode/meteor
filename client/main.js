import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Navbar} from '../import/header.js';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="section no-pad-bot" id="index-banner">
  <div className="container">

    <h1 className="header center orange-text">Hello User</h1>
    <div className="row center">
      <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
    </div>
    <div className="row center">
      <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light  light-blue lighten-2">Get Started</a>
    </div>

  </div>

</div>
</div>
    );
  }
}


Meteor.startup(() => {
    ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
});
