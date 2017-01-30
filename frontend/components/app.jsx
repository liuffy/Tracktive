import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SidebarContainer from './sidebar/sidebar_container';
import TracktlistIndexContainer from './tracktlist/tracktlist_index_container';
import Search from './search/search';
import AboutModal from './about/about-modal';
import {Link} from 'react-router';


class App extends React.Component {
  constructor(props){
    super(props);
  }

 componentWillReceiveProps(newProps){ // Need this to redirect! 
    if(!newProps.currentUser){
      this.props.router.push('/'); // redirect to splash if logged out
    }
  }

  render (){

    return(
      <div> 
      	<div
      		className="header-bar">
        <span 
          className="tracktive-wordmark"><Link to="/browse">tracktive</Link></span>
        <GreetingContainer />
          <Search />
        <SidebarContainer />
        </div>
        <AboutModal />
        
        { this.props.children }
      </div>
      )
  
  }
}

export default App;