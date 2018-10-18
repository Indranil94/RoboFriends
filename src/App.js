import React, { Component } from 'react';
import './App.css';
//import {robots} from "./robots.js";
import ParentComp from './parentComp.js'
import AllRobots from "./robotLoop.js";
import SearchComponent from "./searchComponent";
class App extends Component {

  constructor(){
    super();
    this.state = {
      robot: [],
      searched: ""
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users=>{
      console.log(users);
      this.setState({robot: users});});
    //console.log(this.state.robot)
  }

  onSearchChange = (event) =>{
    this.setState({
      searched: event.target.value
    })
    this.setState({
      robot: this.state.robot.filter( (rob) =>{
        return (rob.name.toLowerCase().includes(this.state.searched.toLowerCase()) || rob.email.toLowerCase().includes(this.state.searched.toLowerCase()));
      })
    })
  }

  render(){
    return (
      <div className = "tc bg-light-blue">
        <h1>Robot Friends</h1>
        <SearchComponent searchChange={this.onSearchChange} />
        <ParentComp>
          <AllRobots robotarray = {this.state.robot} />
        </ParentComp>
      </div>
      );
  }
}

export default App;
