import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <span className="tracktive-wordmark1">track</span><span className="tracktive-wordmark2">tive</span>
    <GreetingContainer />
    { children }
  </div>
);

export default App;