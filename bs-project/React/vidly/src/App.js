import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './component/movies'
import NavBar from './component/navbar';
import Customers from './component/customers';
import Rentals from './component/rentals';
import NotFound from './component/not-found';

class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
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

