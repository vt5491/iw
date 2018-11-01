import React, { Component } from 'react';
import './Mantra.css';


class Mantra extends React.Component {
  text() {
    return (
    // <={ this.props.className }>
    // <textarea cols="50">
    // </textarea>
    <mantra-text id="mt" className={"mt-class"}>
    <h3 id="whatistheinfinitewheelie" className={'mt-class'}>What is the Infinite Wheelie?</h3>

    <p>Syntactically, <em>an</em> infinite wheelie, in its individual form, or <em>the</em> infinite wheelie, in its collective form, is the expression of the <a href="http://www.academia.edu/6559621/The_Zero_Dimension_Quantum_Universe">zinfinite</a> composition of zero and infinity.  The symbol for zero is represented by a circle, which itself is an expression of an infinite loop in a finite amount of space.  If you were to sum all the integers between negative infinity and positive infinity you would get zero.  Think about that: the infinite <em>totality</em> of all numbers equals zero.  It's one of the most amazing and beautiful properties of the universe: embedded within every zero is the collective whole of all numbers, representing infinite potential.  </p>
    </mantra-text>
    // <textarea cols="50">
    // <em>hello</em>
    // </textarea>
    )
  }

  render() {
    return React.createElement(
      "div",
      {className: "mt-class"  },
      this.text()
      // "hello "
    )
  }


}

export default Mantra;
