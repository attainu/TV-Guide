import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import NavMenu from './components/NavMenu';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import LatestPage from './pages/LatestPage';
import WatchPage from './pages/WatchPage';
import SubscribePage from './pages/SubscribePage';
import PopularPage from './pages/PopularPage';
import ProtectedRoute from './components/ProtectedRoute';
import ShowDetails from './pages/ShowDetails';
import Footer from './components/Footer';


function App(props) {
  //console.log(store)
  return (
      <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/showdetails/:tvId" component={ShowDetails} />
        <ProtectedRoute exact path="/watch" component={WatchPage} user={props.userDetail?true:false}/>
        <ProtectedRoute exact path="/subscribe" component={SubscribePage} user={props.userDetail?true:false}/>
        <ProtectedRoute exact path="/popular" component={PopularPage} user={props.userDetail?true:false}/>
        <ProtectedRoute exact path="/latest" component={LatestPage} user={props.userDetail?true:false}/>
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStatesToMatch = (storeState) => {
  return { userDetail: storeState.authState.user }
}
export default connect(mapStatesToMatch)(App);
