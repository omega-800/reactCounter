import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Component } from 'react';


class Calc extends Component{
  constructor(){
    super();
    this.state={nr:0};
  }

  render(){
    const{
      plus,
      minus
    } = this.props;
    return(
      <div>
        <p id="txt" style={{color: "red"}}>{this.state.nr}</p>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  plus = () => {
    this.setState({nr:this.state.nr + 1});
  }

  minus = () => {
    this.setState({nr:this.state.nr - 1});
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Calc />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
