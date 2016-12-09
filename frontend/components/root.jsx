import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/'); // redirects you to the root page if you try to go to the log out or sign up form
  }
}

	return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
      	<Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
				<Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Route>
    </Router>
  </Provider>
	)
	
}



export default Root;