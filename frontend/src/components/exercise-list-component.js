import React from "react";
import {Link} from "react-router-dom";
import axios from "./axios"




const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.notes}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )

export default class ExerciseList extends React.Component{
    constructor(props){
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this)

        this.state = {
            exercises: []

        }
    }

    componentDidMount(){
        axios.get("/exercises/")
            .then(response => {
                this.setState({
                    exercises: response.data
                })
           
            })
    }

    deleteExercise(id){
        axios.delete("/exercises/"+id)
            .then(res => console.log(res.data))
        this.setState({
            exercises: this.state.exercises.filter(el => el._id != id)
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise = {currentExercise} deleteExercise = {this.deleteExercise} key = {currentExercise._id}/>
        })
    }
    render(){
        return(
            <div>
                <h1 style = {{color: "white"}}>Logged Workout</h1>
                    <table className = "table">
                        <thead className = "thead-light">
                            <tr>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Notes</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style = {{color: "white"}}>
                            { this.exerciseList() }
                        </tbody>
                    </table>    
            </div>
        )
    }
}