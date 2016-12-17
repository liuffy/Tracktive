import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import UserDetailContainer from './user/user_detail_container';

import TracktlistFormContainer from './tracktlist_form/tracktlist_form_container';
import TracktlistShowContainer from './tracktlist/tracktlist_show_container';

import SiteInfo from './about/site_info';
import Dashboard from './dashboard/dashboard';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/explore'); // redirects to the root page if you try to go to the log out or sign up form
  }
}

  const _ensureLoggedIn = (nextState, replace) =>{
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/login');
    }
  }

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
      <IndexRoute component={Dashboard}/>
        <Route path="/about" component={ SiteInfo } />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path= "/users/:userId" component={UserDetailContainer}/>
         <Route path="/tracktlists/new" component={TracktlistFormContainer} onEnter={_ensureLoggedIn}/>
        <Route path='/tracktlists/:tracktlistId' component={ TracktlistShowContainer }/>
      </Route>
    </Router>
  </Provider>
	)
	
}



export default Root;