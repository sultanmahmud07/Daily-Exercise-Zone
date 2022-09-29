import React, { Component } from 'react';
import './Question.css'
class Question extends Component {
  render() {
    return (
      <div>
       <div className="container">
       <h1 className='question-title'><span className='qs-title'>Some Questions & Ans.</span></h1>
       <div className="question-container">
        <div className="question">
          <h3 className='q-title'>1. How dose react work ?</h3>
          <p className='q-info'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
        </div>
        <div className="question">
          <h3 className='q-title'>2. What is the difference between props and state ?</h3>
          <p className='q-info'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
        </div>
        <div className="question">
          <h3 className='q-title'>3. What is the purpose of useEffect in React ?</h3>
          <p className='q-info'>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
       </div>
       </div>
      </div>
    );
  }
}

export default Question;