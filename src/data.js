import React, { Component } from 'react';

  import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";
//   import ZsButton from '../component/button/button'


//   const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     localStorage.getItem('admin') ? <Component {...props} /> :
//     <Redirect to={{
//      pathname: '/admin',
//      state : { from: props.location }
//  }} />
//  )} /> 
//   )

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // submit = () => { 
    //     console.log("Logout successfully")
    //     history.push('/login')
    // }
    render() { 
        return ( 
            <div>
            <Router>
      <div>
    
   
    <Provider store={store}>
              <Router>
                <div className="App">
                  <Navbar />
                  <div className="container">
                    <div className="py-3">
                      <Switch>
                          
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/contacts/add" component={AddContact} />
                        <Route
                          exact
                          path="/contacts/edit/:id"
                          component={EditContact}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </Router>
            </Provider>

        </div>
    </Router>
    
      </div>
         );
    }
}
 
export default Data;

// function Home() {
//     return <h2>Product Management</h2>;
//   }
  
//   function About() {
//     return <h2>Account handling</h2>;
//   }
  
  