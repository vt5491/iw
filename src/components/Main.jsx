import React, { Component } from "react";
// import { BrowserRoute, Route, Link } from "react-router-dom";
import "./Main.css";

import Mantra from "./Mantra";
import VRGalIntro from "./intros/VRGalIntro";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);

    // this.state.activeComponent = 'mantra';
    // this.state = { activeComponent: 'mantra'};
    this.state = { activeComponent: "mantra", abc: 7 };
    // this.setActiveComponent('mantra');
  }

  setActiveComponent(component) {
    // this.state = {};
    // debugger;
    switch (component) {
      case "mantra":
        this.state.activeComponent = "mantra";
        break;
      case "vrgal-intro":
        this.state.activeComponent = "vrgal-intro";
        // this.props.history.push({ pathname: "/apps/vrgal-introl" });
        // window.location = "/apps/vrgal-intro";
        break;
      default:
        this.state.activeComponent = "main";
    }
    console.log(
      `Mantra.setActiveComponent: activeComponent=${this.state.activeComponent}`
    );
    // I shouldn't need to call forceUpdate since I am updating the Main components
    // state.  But for some reason, I *do* need to.
    this.forceUpdate();
  }

  vrGalLandingPage() {}

  headerApps() {
    return (
      <>
        {/*<label>Apps:</label>
        <button onClick={this.setActiveComponent.bind(this, "vrgal-intro")}>
        VRGal
        </button>*/}
        {/*<div className="btn-group">
          <label>Apps:</label>
          <button onClick={this.setActiveComponent.bind(this, "vrgal-intro")}>
            VRGal
          </button>
        </div>*/}
        <div className="input-group">
          <label>Apps:</label>
          <form action="html/apps/vrgal/intro.html">
            <input type="submit" value="VRGal" />
          </form>
        </div>
      </>
    );
  }
  footer() {
    return (
      <footer className="main-footer">
        <button onClick={this.setActiveComponent.bind(this, "vrgal-intro")}>
          vrgal-main
        </button>
        <button onClick={this.setActiveComponent.bind(this, "mantra")}>
          mantra
        </button>
      </footer>
    );
  }
  // {/*<button onClick={this.setActiveComponent('vrgal-intro')}>vrgal-main</button>*/}
  // <button onClick={() => {this.state.activeComponent="vrgal-intro"}}>vrgal-main</button>
  doIt() {
    // debugger;
    console.log(`now in doIt, activeComponent=${this.state.activeComponent}`);
  }

  render() {
    // debugger;
    console.log(`Main: now in render`);
    if (this.state.activeComponent === "mantra") {
      return (
        <>
          {this.headerApps()}
          <Mantra
            parms={{ setActiveComponent: this.setActiveComponent.bind(this) }}
          />
          {/*<button onClick={this.doIt.bind(this)}>doIt</button>*/}
          {/*<button onClick={this.setActiveComponent.bind(this, 'vrgal-intro')}>click</button>*/}
          {/*<button onClick={console.log(`you clicked me`)}>click me</button>*/}
          {/*{this.footer()}*/}
        </>
      );
    } else if (this.state.activeComponent === "vrgal-intro") {
      return (
        <>
          <VRGalIntro />
          {/*{this.footer()}*/}
        </>
      );
    } else {
      return (
        <div id="main">
          <h2>main component</h2>
        </div>
      );
    }
  }

  // render() {
  //   {
  //     return (
  //     <div>
  //       <Router>
  //         <Route pattern="/" component={Mantra} />
  //         <Route pattern="/apps/vrgal-intro" component={VRGalIntro} />
  //       </Router>
  //     </div>
  //     );
  //   }
  // }
}

export default Main;
