import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SidebarContainer from './sidebar/sidebar_container';
import Search from './search/search';
import AboutModal from './about/about-modal';
import {Link} from 'react-router';


class App extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

 componentWillReceiveProps(newProps){ // Need this to redirect! 
    if(!newProps.currentUser){
      this.props.router.push('/'); // redirect to splash if logged out
    }
  }

   handleLogout(){
    this.props.logout();
  }

  render (){

   let logoutButton;
    if(this.props.currentUser){
      logoutButton = <button onClick={this.handleLogout}
                        className='logout-button'>Log out</button>;
    }

    return(
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
        { this.props.children }
      </div>
      )
  
  }
}

export default App;