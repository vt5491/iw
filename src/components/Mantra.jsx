import React, { Component } from 'react';
import './Mantra.css';
// import WheelieKid from 'WheelieKid';
// import {WheelieKid} from './WheelieKid';
import WheelieKid from './WheelieKid';


class Mantra extends React.Component {
  constructor(props) {
    super(props);
    // this.abc = "text-align: right";
    this.centerAlign = "center";
  }

  text() {
    return (
    // <={ this.props.className }>
    // <textarea cols="50">
    // </textarea>
    // <mantra-text id="mt" className="mantra-text">
    // <mantra-text className="mantra-text">
      // style={{text-align: right}}
      // style={{marginRight: spacing + 'em'}}
      // style={'abc'}
      // style={{textAlign: this.centerAlign}}
    <mantra-text>

      <div className="mantra-text">
        <h3 className='mantra-header'>What is the Infinite Wheelie?</h3>
        <p>Syntactically, <em>an</em> infinite wheelie in its individual form, or <em>the</em> infinite wheelie in its collective form, is the expression of the <a href="http://www.academia.edu/6559621/The_Zero_Dimension_Quantum_Universe">zinfinite</a> composition of zero and infinity.  The symbol for zero is represented by a circle, which itself is an expression of an infinite loop in a finite amount of space.  If you were to sum all the integers between negative infinity and positive infinity you would get zero.  Think about that: the infinite <em>totality</em> of all numbers equals zero.  It's one of the most amazing and beautiful properties of the universe: embedded within every zero is the collective whole of all numbers, representing infinite potential.  </p>
        <p/>
        <h3 className='mantra-header'>What is the Infinite Wheelie experience?</h3>

        <p>Semantically; intuitively; the infinite wheelie is about the intersectionality and interplay between the spirit of infinite potential and its concrete manifestation into reality.  To take the concept of "wheelie" in its more literal form, imagine popping a wheelie on a bike.   In case you've never done this, I would say a defining characteristic is that of <em>instability</em>: it requires a lot of balance, concentration, and just the right amount of acceleration to maintain. Now think of the feeling you experience when sustaining an exceptionally long one.   As motocross-struck kids riding our bikes around the neighborhood, most of us could only hope to sustain one for a few seconds at best.  </p>

        <p>However, every once in a while, and out of the blue, somehow you find yourself riding out an incredibly long "singular" wheelie. It feels wonderful, empowering, and gracefully peaceful. It's zen-like bliss. It usually happens when you're not thinking about it or trying especially hard.  Momentarily it feels like you can hold it forever.   Of course, the <em>instant</em> you have this thought you know you're doomed!  But that feeling you get right before you start to "think" about it, and the few seconds afterward while you're still maintaining it (much to your amazement)-- that's what the infinite wheelie experience is all about.</p>
        <p/>
        <WheelieKid></WheelieKid>
        <h3 className='mantra-header'>What is the infinite wheelie way?</h3>

<p>The infinite wheelie way is about productively sublimating one's eternal will into positive, productive, and rational endeavors.  It involves constant and never-ending improvement through relentless directed learning as well as just-in-time learning.  It's about balancing will and wisdom: trying to maximize wisdom while maintaining a sustainable supply of will.  It's about being substrate-independent and not shackling yourself to any one technology stack: being a <em>compleat</em>, full-stack, multi-paradigmatic developer.  It's about integrating your higher and lower selves, and recognizing both the implicate and explicate order. It's about having the guts to try new things and taking the risks and sacrifices to get there.</p>

<p>And it's also about implementing and manifesting that potential into reality -- in the form of creating actual workable software.  </p>

<p>It's about being at one with the infinite wheelie.</p>

<p>Are you at one with the Infinite Wheelie?</p>

<p>Strive to be at one with infinite wheelie...</p>
        <h3 className='mantra-header'>Apps</h3>
          <p/>
          <div className='mantra-app'>
          <a  href="https://infinitewheelie.org/apps/vrgal/">VRGal</a>
          </div>

<div className='mantra-footer'>
<p>The Infinite Wheelie is powered by <a href="https://www.youtube.com/watch?v=AGPlqP0tUyE&amp;list=PLiMRYDGr3ap04uX70m2R7p3REe4PSRFW2">ontolgical mathematics</a></p>
</div>
      </div>
    </mantra-text>
        // ReactDOM.render('<WheelieKid></WheelieKid>');
    // <textarea cols="50">
    // <em>hello</em>
    // </textarea>
    )
  }
        // <wheelie-kid></wheelie-kid>
        // <WheelieKid></WheelieKid>

  mantraTitle() {
    return(
      <>
        <h3 className="mantra-title">Welcome to Infinite Wheelie</h3>
        <p/>
        <img src="img/tux_tada.jpg" alt="tux tada"></img>
      </>
    )
  }

  // render() {
  //   return React.createElement(
  //     "div",
  //     {className: "mt-class"  },
  //     this.text()
  //     // "hello "
  //   )
  // }

  render() {
      return (
        <div className= "mantra-div">
          {this.mantraTitle()}
          {this.text()}
        </div>
      )
  }


}

export default Mantra;
