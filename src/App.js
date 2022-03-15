import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Movies from './component/movies'
import NavBar from './component/navbar';
import Customers from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/not-found';
import MoviesForm from './component/moviesForm';
import LoginForm from './component/loginForm';
import RegisterForm from './component/registerForm';
import auth from './services/authService';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Logout from './component/logout';
class App extends Component {
  state = {

  }

  componentDidMount() {
      const user = auth.getCurrentUser();
      this.setState({ user });
  }

  render() { 
    return ( 
      <React.Fragment>
        <ToastContainer/>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/movies/:id" component={MoviesForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main> 
      </React.Fragment>
    );
  }
}
 
export default App;

