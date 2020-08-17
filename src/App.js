import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import NavMenu from './components/NavMenu';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';
import Register from './pages/Register';
import LatestPage from './pages/LatestPage';
import WatchPage from './pages/WatchPage';

function App() {
  //console.log(store)
  return (
    <Provider store={store}>
      <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/watch" component={WatchPage} />
        <Route exact path="/latest" component={LatestPage} />
      </Switch>
    </Router>
    </Provider >
  );
}

export default App;
