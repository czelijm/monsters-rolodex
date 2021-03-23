import React, {Component} from 'react';
import './App.css';

import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/searchbox/searchbox.component';

//we convert from function to class to access render() method, render method return any HTML
//State is some object
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };

    //because javascript dont set scope to their function/methods we have to set context by ourselfs
    //bind returns the function with context that we set to
    //for metheds that is not the arrow functions
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }

  //method that is called by react, when method is mounted (first time rendered by react in virtual dom)
  componentDidMount(){
    //api call to url, fetch() retutn the promise
    fetch('https://jsonplaceholder.typicode.com/users')
    //we convert the response to jsonformat
    .then(response =>response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    //destructure the object, pulling of properties insted of
    // const monsters = this.state.monsters;
    // const searchFiels = this.state.searchField;
    //we do
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      {/* this.setState({thing ON state update},()=>{things after state update}) */}
      {/* we pass this.handleChange ---> we pass entire callback body */}
      <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters}>
        {
          //we will aplly function for all elements
          //react will now to render all the elements (this array which is returned), bunch of HTML blocks
          //every element need unique key in case of updating the particular block
           {/* this.state.monsters.map((monster)=>(
            <h1 key={monster.id}>{monster.name}</h1>
          ))  */}
          //console.log(this.state.monsters) 
        }
      </CardList>
      </div>
    );
  }
}

export default App;


//ended on 35