import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters: [ 
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 1},
        {id: 4, value: 0},
        {id: 5, value: 0},
        {id: 6, value: 0},
        {id: 7, value: 0},
        {id: 8, value: 0},
        {id: 9, value: 0},
        {id: 10, value: 0},
        {id: 11, value: 0},
        {id: 12, value: 0},
        {id: 13, value: 0},
        {id: 14, value: 0},
        {id: 15, value: 0},
        {id: 16, value: 0},
        {id: 17, value: 0},
      ]
  } 

  handleIncrement =  counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement =  counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value > 0) {
      counters[index].value-=1;
    }
    this.setState({counters});
  }

  handleDelete =  (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {c.value = 0; return c;});
      this.setState({counters});
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete}></Counters>
          </main>
      </React.Fragment>
    );
  }
}

export default App;
