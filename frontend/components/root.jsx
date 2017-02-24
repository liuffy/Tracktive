import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import SplashContainer from './splash/splash_container';

import SessionFormContainer from './session_form/session_form_container';
import UserDetailContainer from './user/user_detail_container';
import TracktlistIndexContainer from './tracktlist/tracktlist_index_container'
import TracktlistShowContainer from './tracktlist/tracktlist_show_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) =>{
    const currentUser = store.getState().session.currentUser;
    if (!store.getState().session.currentUser) { // if there's no current user for the session
      replace("/"); // redirect to the root page 
    }
  }

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ SplashContainer } />
       <Route path='/app' component={ AppContainer } onEnter={_ensureLoggedIn} >
       <Route path='/browse' component = {TracktlistIndexContainer} onEnter={_ensureLoggedIn}/>
       <Route path='/mine' component={UserDetailContainer} onEnter={_ensureLoggedIn}/>
        <Route path= "/users/:userId" component={UserDetailContainer}/>
        <Route path='/tracktlists/:tracktlistId' component={ TracktlistShowContainer }/>
      </Route>
    </Router>
  </Provider>
	)
}



export default Root;