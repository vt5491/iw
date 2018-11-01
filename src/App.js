import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import React from 'react';
import YouTube from 'react-youtube';

import Mantra from './components/Mantra';

class App extends React.Component {

  render() {
    const wheelieKidVidId = "3W50hGEs5JE";
    const catVidId =  "2g811Eo7K8U";
    const opts = {
      height: '195',
      width: '320',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        start: 68
      },
    };

    return (
      <Mantra/>
      // <YouTube
      //   videoId={wheelieKidVidId}
      //   // videoId={catVidId}
      //   opts={opts}
      //   onReady={this._onReady}
      // />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default App;
