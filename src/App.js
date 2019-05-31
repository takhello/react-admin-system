import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/index.js';
import {CSSTransition } from "react-transition-group";
import Login from './views/Login';
import Index from './views/Index';
import PrivateRoute from './router/PrivateRoute';
import NoMatch from './views/NoMatch';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/ant">
        <div className="entryWrap">
          <CSSTransition
            classNames="fade"
            timeout={300}
          >
            <Switch>
              <Route path="/login" component={Login} exact/>
              <PrivateRoute path="/" component={Index}/>
              <Route component={NoMatch}/>
            </Switch>
          </CSSTransition>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
