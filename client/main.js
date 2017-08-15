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
  <div className="row center">

    <h1 className="header center blue-text">
  <img src = {'pictures/word2.png'} />
    <img src = {'pictures/security.png'} /></h1>
    </div>
    <div className="row center">


    </div>
    <div className="row center">


     <div className="qwe">
     <img  className="rty responsive-img" src="https://image.ibb.co/iSB1ra/Webp_net_resizeimage_1.png" />
      <img  className="uio responsive-img" src="http://73.88.15.214:8080/?action=stream" />
      </div>




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
