
import './App.css';
import React, { Component } from 'react';
import Counters from './counter/counters';
import NavBar from './navbar/navbar';


class App extends Component {
  state = { 
    counters: [
        {id: 0, value: 2},
        {id: 1, value: 1},
        {id: 2, value: 4},
        {id: 3, value: 5},
    ]
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter }
    counters[index].value++;
    this.setState({counters});
    console.log('click',counter);
  }
  handleReset = () => {
      const counters = this.state.counters.filter( c => { 
          c.value = 0; 
          return c;
      })
      this.setState({counters});
  }
  handleDelete = (counter) => {
      const counters = this.state.counters.filter( c => c.id !== counter);
      console.log(counters);
      this.setState({counters});
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter }
    counters[index].value--;
    this.setState({counters});
    console.log('click',counter);
  }
  componentDidMount() {
    console.log('App is mounted');
  }
  render(){
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters} 
            onReset={this.handleReset} 
            onDelete={this.handleDelete} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
      );
  }

}

export default App;
