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
          ><Link to="/browse"><img className="wordmark-logo"
            src="http://res.cloudinary.com/liuffy/image/upload/v1485894985/wordmark-4_yiaq9n.png"/></Link></span>
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