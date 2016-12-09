import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import About from './about/about';

const App = ({ children }) => (
  <div> 
  	<div
  		className="header-bar">
    <span className="tracktive-wordmark1">track</span><span className="tracktive-wordmark2">tive</span>
    <GreetingContainer />
    </div>
    <About />
    { children }
  </div>
);

export default App;