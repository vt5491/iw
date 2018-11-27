import React, { Component } from "react";
import "./VRGalIntro.css";

class VRGalIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  intro() {
    return <>hi from VRGal react</>;
  }

  render() {
    console.log(`VRGalIntro: now in render`);
    // debugger;
    // var mantraDiv = document.querySelector('#mantra-div');
    // mantraDiv.style.display = 'none';
    // this.props.parms.fuckWithMyState();
    // this.props.location.state.fuckWithMyState();
    return <div className="vrgal-intro-div">{this.intro()}</div>;
  }

  componentDidMount() {
    console.log(`VRGalIntro: component mounted`);
  }
}

export default VRGalIntro;
