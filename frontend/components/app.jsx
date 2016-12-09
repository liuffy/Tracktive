import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div> 
  	<div
  		className="header-bar">
    <span className="tracktive-wordmark1">track</span><span className="tracktive-wordmark2">tive</span>
    <GreetingContainer />
    </div>
    { children }
  </div>
);

export default App;