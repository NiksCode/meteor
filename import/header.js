import React from 'react';
import {Meteor} from 'meteor/meteor';


export class Navbar extends React.Component {
  render() {
    return (
      <nav className="gradient-black" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">
          <img src = {'pictures/word.png'} />
        </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="./login.php">Login</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
