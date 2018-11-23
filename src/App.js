import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// import React from 'react';
// import YouTube from 'react-youtube';

import Main from './components/Main';
import Mantra from './components/Mantra';
import VRGalIntro from './components/intros/VRGalIntro';

class App extends React.Component {

  render() {
    // const wheelieKidVidId = "3W50hGEs5JE";
    // const catVidId =  "2g811Eo7K8U";
    // const opts = {
    //   height: '195',
    //   width: '320',
    //   playerVars: { // https://developers.google.com/youtube/player_parameters
    //     autoplay: 0,
    //     start: 68
    //   },
    // };

    // return (
    //   <>
    //   <Mantra/>
    //   </>
    // );
    return (
      <>
      <Main/>
      </>
    );
  }
      // <Router>
      //   <div>
      //         <ul>
      //           <li>
      //           <Link to="/apps/vrgal-intro">VRGal-route</Link>
      //           </li>
      //         </ul>
      //     <Route path="/apps/vrgal-intro" component={VRGalIntro} />
      //   </div>
      // </Router>

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
}

export default App;
