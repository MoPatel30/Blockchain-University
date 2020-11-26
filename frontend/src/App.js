import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar-component.js";
import ExerciseList from "./components/exercise-list-component.js";
import EditExercise from "./components/edit-exercise-component.js";
import CreateExercises from "./components/create-exercise-component.js";
import CreateUser from "./components/create-user-component.js";





export class App extends React.Component{
  
  render(){
    return(
      <Router>
        <div className = "container">
          <Navbar />
          <br/>
          <Route path = "/" exact component = {ExerciseList} />
          <Route path = "/edit/:id" component = {EditExercise} />
          <Route path = "/create" component = {CreateExercises} />
          <Route path = "/user" component = {CreateUser} />
        </div>
      </Router>
    )
  }
}


