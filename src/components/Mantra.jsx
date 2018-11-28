import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Mantra.css";
import WheelieKid from "./WheelieKid";
import VRGalIntro from "./intros/VRGalIntro";

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.centerAlign = "center";

    this.state = { isHidden: false };
    this.state.callback = this.update;
    this.state.abc = 7;
    this.state.activeComponent = "mantra";
  }

  toggleHidden() {
    console.log(`Mantra: now in toggleHidden`);
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  update() {
    console.log(`Mantra: now in update`);
    this.setState({ abc: 7, isHidden: true });
  }

  fuckWithMyState() {
    debugger;
    this.state.abc = this.state.abc + 1;
  }

  // goToNextPage = fuckWithMyState => {
  //   // debugger;
  //   console.log(`Mantra.goToNextPage: entered`);
  //   this.props.history.push({
  //     pathname: "/apps/vrgal-intro",
  //     state: { fuckWithMyState: fuckWithMyState }
  //   });
  // };

  text() {
    return (
      <mantra-text className="container">
        <div className="mantra-text">
          <h3 className="mantra-header">What is Infinite Wheelie?</h3>
          <p>
            Syntactically, <em>an</em> infinite wheelie in its individual form,
            or <em>the</em> infinite wheelie in its collective form, is the
            expression of the{" "}
            <a
              className="text-warning"
              href="http://www.academia.edu/6559621/The_Zero_Dimension_Quantum_Universe"
            >
              zinfinite
            </a>{" "}
            composition of zero and infinity. The symbol for zero is represented
            by a circle, which itself is an expression of an infinite loop in a
            finite amount of space. If you were to sum all the integers between
            negative infinity and positive infinity you would get zero. Think
            about that: the infinite <em>totality</em> of all numbers equals
            zero. It's one of the most amazing and beautiful properties of the
            universe: embedded within every zero is the collective whole of all
            numbers, representing infinite potential.{" "}
          </p>
          <div className="container div-centered">
            <blockquote className="quote-box">
              <p className="quotation-mark">“</p>
              <p className="quote-text">
                The universe that we all experience exists purely because zero
                contains all numbers … because zero is exactly where “something”
                = “nothing”. Reality exists solely because something = nothing.
                Zero is everything. Zero contains everything. Zero is
                everywhere. Zero is whole everywhere, and whole in everything.
                Nothing rivals the incredible power and beauty of zero.
              </p>
              <hr />
              <div className="blog-post-actions">
                <p className="blog-post-bottom pull-left">
                  Holenmerism and Nullibism: The Two Faces of the Holographic
                  Universe, Dr. Thomas Stark
                </p>
              </div>
            </blockquote>
          </div>
          <p />
          <h3 className="mantra-header">
            What is the Spirit of the Infinite Wheelie?
          </h3>

          <p>
            Semantically or intuitively, the infinite wheelie is about the
            intersectionality and interplay between the spirit of infinite
            potential and its concrete manifestation into reality. To take the
            concept of "wheelie" in its more literal form, imagine popping a
            wheelie on a bike. In case you've never done this, I would say the
            defining characteristic is that of <em>instability</em>: it requires
            a lot of balance, concentration, and just the right amount of
            acceleration to maintain. Now think of the feeling you experience
            when sustaining an exceptionally long one. As motocross-struck kids
            riding our bikes around the neighborhood, most of us could only hope
            to hold one for a few seconds at best.{" "}
          </p>

          <p>
            However, every once in a while, and seemingly out of nowhere, you
            find yourself riding out an incredibly long "singular" wheelie. In
            the zen-like bliss of the moment, you feel it's grace and empowering
            potential. It usually happens when you're not thinking about it or
            trying especially hard. Momentarily, it feels like you can hold it
            forever. Of course, the <em>instant</em> you have this thought you
            know you're doomed! But that feeling right before you start to
            "think" about it, and the few seconds afterward while you're still
            maintaining it (much to your amazement)-- that's the spirt of the
            infinite wheelie.
          </p>
          <p />
          <WheelieKid />
          <h3 className="mantra-header">What is the infinite wheelie way?</h3>

          <p>
            The infinite wheelie way is about productively sublimating one's
            eternal will into positive, productive, and rational endeavors. It
            involves constant and never-ending improvement through relentless
            directed and just-in-time learning. It's about balancing will and
            wisdom: trying to maximize wisdom while maintaining a sustainable
            supply of will. It's about being substrate-independent and not
            shackling oneself to any singular technology stack: being a{" "}
            <em>compleat</em>, full-stack, multi-paradigmatic developer. It's
            about integrating your higher and lower selves, and recognizing both
            the implicate and explicate order. It's about having the guts to try
            new things and taking the risks and sacrifices to get there.
          </p>

          <p>
            And it's also about implementing and manifesting that potential into
            reality -- in the form of creating actual workable software.{" "}
          </p>

          <p>
            The Infinite Wheelie is uncreated and eternal. It will not and can
            not be stopped.
          </p>

          <h3 className="mantra-header">Apps</h3>
          <p />
          <div className="mantra-app">
            {/*<a href="https://infinitewheelie.org/apps/vrgal/">VRGal-old</a> */}
            {/*<a href="html/apps/vrgal/intro.html">VRGal</a>*/}
            <p />
          </div>
          {/*<Router>
            <div>
              <Link
                onClick={this.goToNextPage}
                to={{ pathname: "/apps/vrgal-intro" }}
              >
                vrgal-intro
              </Link>
              <Route path="/apps/vrgal-intro" component={VRGalIntro} />
            </div>
          </Router>*/}
          {/*<div className="centered">
            <button className="btn-centered" onClick={this.goToNextPage}>
              vrgal-intro
            </button>
          </div>*/}
          <div className="centered">
            <a href="html/apps/vrgal/intro.html">VRGal</a>
          </div>

          <div className="mantra-footer">
            <p>
              Infinite Wheelie is inspired by{" "}
              <a href="https://www.youtube.com/watch?v=AGPlqP0tUyE&amp;list=PLiMRYDGr3ap04uX70m2R7p3REe4PSRFW2">
                ontolgical mathematics
              </a>
            </p>
          </div>
        </div>
      </mantra-text>
    );
  }

  mantraTitle() {
    return (
      <>
        <p />
        <h3 className="mantra-title">Welcome to Infinite Wheelie</h3>
        <p />
        <img src="img/tux_tada.jpg" alt="tux tada" />
      </>
    );
  }

  render() {
    // console.log(`Mantra.render: this.state.isHidden=${this.state.isHidden}`);
    // if (!this.state.isHidden) {
    //   console.log('path a');
    //   return (
    //     <div className= "mantra-div">
    //       {this.mantraTitle()}
    //       {this.text()}
    //     </div>
    //   )
    // }
    // else {
    //   console.log('path b');
    //   return (
    //     <div></div>
    //   )
    // }
    console.log(`Mantra: now in render`);
    // debugger;
    if (this.state.activeComponent === "vrgal-intro") {
      return (
        <>
          <VRGalIntro />
          {/*parms={{ fuckWithMyState: this.fuckWithMyState.bind(this) }}*/}
        </>
      );
    } else {
      return (
        <div className="mantra-div">
          {this.mantraTitle()}
          {this.text()}
        </div>
      );
    }
  }
}

export default Mantra;
