import React, { Component } from 'react'
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from "./../redux/actions/authActions";
import './../css/Login.css'
class Register extends Component {
    state = {
        email: null,
        password: null,
        passwordConfirm: null,
        firstName: null,
        lastName: null,
        message: null,
        emailErr: null,
        passwordErr: null,
        passwordConfirmErr: null,
        firstNameErr: null,
        lastNameErr: null
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleValidation = (event) => {
        switch (event.target.name) {
            case "email":
                const patt = /\S+@\S+\.\S+/;
                patt.test(this.state.email)===true ? (this.state.email ? this.setState({ emailErr: null }) : this.setState({ emailErr: "Email Should Not be Null" })) : this.setState({ emailErr: "It's Not Valid Email" })
                console.log(patt.test(this.state.email))
                
                break;
            case "password":
                this.state.password!==null && this.state.password.length > 8 ? this.setState({ passwordErr: null }) : this.setState({ passwordErr: "Password should not be less than 8 characters" })
                break;
            case "passwordConfirm":
                this.state.passwordConfirm!==null && this.state.passwordConfirm === this.state.password ? this.setState({ passwordConfirmErr: null }) : this.setState({ passwordConfirmErr: "Password should  be matched" })
                break;
            case "firstName":
                this.state.firstName!==null && this.state.firstName.length > 3 ? this.setState({ firstNameErr: null }) : this.setState({ firstNameErr: "First Name should not be less than 3 characters" })
                break;
            case "lastName":
                this.state.lastName!==null && this.state.lastName.length > 3 ? this.setState({ lastNameErr: null }) : this.setState({ lastNameErr: "last Name should not be less than 3 characters" })
                break;
            default:
                break;
        }
    }
    handleSignIn = (event) => {
        event.preventDefault();
        var email = this.state.email;
        var password = this.state.password;
        if(email!==null && password!==null && this.state.passwordConfirm!==null && this.state.emailErr===null && this.state.passwordErr===null && this.state.passwordConfirmErr===null){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            this.setState({ message: "Email Password Registered" })
        }).catch(function (error) {
            console.log(error);
        });
    }
    }
    handleUpdate = () => {
        var user = firebase.auth().currentUser;
        
        if(this.state.firstName!==null && this.state.lastName!==null && this.state.firstNameErr===null && this.state.lastNameErr===null ){
        user.updateProfile({
            displayName: `${this.state.firstName} ${this.state.lastName}`,
        }).then(function () {
            console.log("Success")
        }).catch(function (error) {
            console.log("Error")
        });
        }
        else
        {
            this.setState({
                firstNameErr:"Something Went Wrong",
                lastNameErr:"Something Went Wrong"
            })
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.setCurrentUser(user)
        })
    }
    render() {
       // console.log(this.state.message)
        return (
            <div className="Login ">
                <h1>Sign Up</h1>
                    {this.state.message === null ?
                        <>
                            <form onSubmit={this.handleSignIn}>
                                <div className="input-field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" onChange={this.handleChange} onBlur={this.handleValidation} autoFocus/>
                                    <p>{this.state.emailErr}</p>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" onChange={this.handleChange} onBlur={this.handleValidation} />
                                    <p>{this.state.passwordErr}</p>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="passwordConfirm">Confirm Password </label>
                                    <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={this.handleChange} onBlur={this.handleValidation} />
                                    <p>{this.state.passwordConfirmErr}</p>
                                </div>

                                <div className="input-field">
                                    <button>Continue</button>
                                </div>
                            </form>
                        </> : (
                            <>
                                <form onSubmit={this.handleUpdate}>
                                    <div >{this.state.message}</div>

                                    <div className="input-field">
                                        <label htmlFor="firstName">First Name </label>
                                        <input type="text" name="firstName" id="firstName" onChange={this.handleChange} onBlur={this.handleValidation} defaultValue={this.state.firstName} />
                                        <p>{this.state.firstNameErr}</p>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="lastName">Last Name </label>
                                        <input type="text" name="lastName" id="lastName" onChange={this.handleChange} onBlur={this.handleValidation} defaultValue={this.state.lastName} />
                                        <p>{this.state.lastNameErr}</p>
                                    </div>
                                    <div className="input-field">
                                        <button>Finish</button>
                                    </div>
                                </form>
                            </>
                        )
                    }
                </div>
        )
    }
}

const mapStatesToMatch = (storeState) => {
    return { userDetail: storeState.authState.user }
}
export default connect(mapStatesToMatch, { setCurrentUser })(Register)
