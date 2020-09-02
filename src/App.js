import React from 'react';

import './App.css';

export class App extends React.Component{
  render(){
    return(
      <div>
        <h1 id = "title"> Blockchain University </h1>
      </div>
    )
  }
}



export class Header extends React.Component{
  render(){
    return(
      <div>
        <h1 id = "header-title"> <em>Welcome to Blockchain University</em> </h1>
        <p id = "main-message-style">Blockchain University aims to equip students who are passionate about blockchain with the necessary knowledge to begin their careers in the blockchain-space.</p>
      </div>
    )
  }
}



export class ModuleOne extends React.Component{
  render(){
    return(
      <div id = "module-one-style">
        <h1 className = "module-titles">Explore all things Blockchain</h1>

        <p className = "main-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
      </div>
    )
  }
}



export class ModuleTwo extends React.Component{
  render(){
    return(
      <div id = "module-one-style">
        <h1 className = "module-titles">Learn about Cryptocurrencies</h1>

        <p className = "main-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
      </div>
    )
  }
}



export class LogIn extends React.Component{
  constructor(){
    super()
    this.state = {
      logged: ""
    }
  }

  operation(event){
    event.preventDefault()

    this.setState({
      logged: "Successfully signed in"
    })

  }
  //{(event) => this.operation(event)}
  render(){
    return(
      <div>
        <a href = "./splash.html">
        <button className = "log-btn" onClick = {(event) => this.operation(event)}> Get Started </button>
        </a>

        <p>{this.state.logged}</p>
      </div>
    )
  }
}



export class Footer extends React.Component{
  render(){
    return(
      <div>
        <h1>This is a footer</h1>
      </div>
    )
  }
}