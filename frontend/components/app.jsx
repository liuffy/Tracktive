import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SidebarContainer from './sidebar/sidebar_container';
import Search from './search/search';
import AboutModal from './about/about-modal';
import {Link} from 'react-router';


const App = ({ children }) => (
  <div> 
  	<div
  		className="header-bar">
    <span 
      className="tracktive-wordmark"><Link to="/">tracktive</Link></span>
    <GreetingContainer />
      <Search />
    <SidebarContainer />
    </div>
    <AboutModal />
    { children }
  </div>
);

export default App;