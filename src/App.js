import React, { Component } from "react";
import "./styles/App.scss";
import Data from './data'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import history from './history';
import ZsButton from './component/button/button'
import ZsSelect from './component/select/select';
import ZsInput from './component/input/input';
import { AppWrapper } from "./AppWrapper";
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const Public = () => <Data />

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    username: "",
    password: "",
    submitted: false,
    errorMsg: false,
    redirect: false,

    mounted: false,


  }
  login = () => {

    this.setState({ submitted: true });
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,

        userType: this.state.username === 'admin' ? 'admin' : 'user'
      }));


    })
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { username, password, type, submitted } = this.state;

    if (username === "admin" && password === "admin") {
      const { from } = this.props.location.state || { from: { pathname: '/contacts' } }

      const { redirectToReferrer } = this.state

      if (redirectToReferrer === true) {
        localStorage.setItem('isSignIn', true)
        localStorage.setItem('isAuthenticateAdmin', true)
        return <Redirect to={'/contacts'} />
      }
    }
    return (
      localStorage.getItem('isSignIn') === 'true' ?
        localStorage.getItem('isAuthenticateUser') === 'true' ?
          <Redirect to={{ pathname: "/contacts" }} /> : <Redirect to={{ pathname: "/contacts" }} />
        :
        <AppWrapper>
        <div>

       
          
          <div className="loginPage">
            <div className="spacing">
              <input  onChange={this.handleChange}
                name="username"
                autocomplete="off"
                className="inputClass"
                placeholder="Enter Username"
                value={username}
                
              />
             {submitted && !username &&
                <div className="help-block" style={{ color: "red" }}>Username is required</div>
              }
            </div>
            <div className="spacing">
              <input  onChange={this.handleChange}
                type="password"
                name="password"
                autocomplete="off"
                className="inputClass"
                placeholder="Enter Password"
                value={password}

              />
                {submitted && !password &&
                <div className="help-block" style={{ color: "red" }}>Password is required</div>
              }
            </div>
            <div className="spacing">
              <button className="buttonStyle" onClick={this.login}> Login</button>
            </div>
            <br></br>
            <div style={{ color: "red" }}>
              {this.state.errorMsg ? "this detail is not valid please enter valid detail" : ""}
            </div>
          </div>
        </div>
        </AppWrapper>
    )
  }
}



const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated
    ? <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
    : <p>You are not logged in.</p>
))

export default function App() {
  return (
    <Router history={history}>
      <div>

        <Route path="/login" component={Login} />
        {/* <Route path="/Access" component={Access} /> */}

        <Route path='/contacts' component={Public} />
        <Redirect to="/login" />
      </div>
    </Router>
  )
}

