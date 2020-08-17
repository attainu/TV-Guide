import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import uiConfig from '../functions/firebaseConfig';
import { setCurrentUser } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import './../css/Login.css'
import { Link } from 'react-router-dom';
import './../css/Cards.css'

class Login extends Component {
    state = {
        isSignedIn: false
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                isSignedIn: !!user
            })
            this.props.setCurrentUser(firebase.auth().currentUser)
        })


    }
    render() {
        return this.props.userDetail ?
            (
                <div className="profile-card">
                    <div className="profile-card-box">
                        <div className="profile-card-box--pic" style={{ backgroundImage: `url(${this.props.userDetail.photoURL})` }} />
                    </div>
                    <div className="profile-card-box">
                        <div className="profile-card-box--name">Hi {this.props.userDetail.displayName} !</div>
                        <div className="profile-card-box--email">Email: {this.props.userDetail.email}</div>
                        <Link to="/watch" className="butt butt-primary">Watch List</Link>
                        <Link to="/subscribe" className="butt butt-secondary">Subscriptions</Link>
                    </div>

                </div>
            ) :
            (
                <div className="login login-main">
                    <h1>Sign In</h1>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <div style={{ textAlign: "center", margin: "auto" }}><Link to="/register" >Register Here!</Link></div>
                </div>
            )
    }
}
const mapStatesToMatch = (storeState) => {
    return { userDetail: storeState.authState.user }
}
export default connect(mapStatesToMatch, { setCurrentUser })(Login)
