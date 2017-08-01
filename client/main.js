import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1>Shopping List for nik</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


Meteor.startup(() => {
    ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
});
