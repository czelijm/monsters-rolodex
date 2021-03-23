import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//we convert from function to class to access render() method, render method return any HTML
//State is some object
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name:'Frankenstein'
        },
        {
          name:'Drakula'
        },
        {
          name:'Zombie'
        },
      ]
    };
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* curly bracles to tell that inside the {} will be java script */}
          <p>
            {this.state.string}
          </p>
          {/* in onClick will be javaSript function that change the state */}
          <button onClick={()=>this.setState({string: 'Yo Button'})}>ClickME</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
