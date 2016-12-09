import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import UserDetailContainer from './user/user_detail_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/'); // redirects to the root page if you try to go to the log out or sign up form
  }
}
        // <Route path="/about" component={ SiteInfo } >

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path= "/users/:userId" component={UserDetailContainer}/>
      </Route>
    </Router>
  </Provider>
	)
	
}



export default Root;