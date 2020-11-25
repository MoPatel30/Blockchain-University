import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "./axios"


export default class CreateExercises extends React.Component{
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeNotes = this.onChangeNotes.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username : "",
            description: "",
            notes: "",
            date : new Date(),
            users: []

        }
    }

    componentDidMount(){
        axios.get("create/")
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    

    onChangeNotes(e){
        this.setState({
            notes: e.target.value
        })
    }

    
    onChangeDate(date){
        this.setState({
            Date: new Date()
        })
    }

    onSubmit(e){
        e.preventDefault()

        const exercise = {
            username : this.state.username,
            description : this.state.description,
            notes : this.state.notes,
            date : this.state.date
        }

        console.log(exercise)

        axios.post("create/add", exercise)
            .then(res => console.log(res.data))

        window.location = "/"
        
    }
    

    
    
    render(){
        return(
            <div>
                <h1 style = {{color: "white"}}> Create New Workout Log </h1>

                

                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label style = {{color: "white"}}>Username: </label>
                        <select ref = "userInput"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                        key = {user}
                                        value = {user}>{user}
                                        </option>
                                })
                            }
                        </select>
                    </div>

                    <div className = "form-group">
                        <label style = {{color: "white"}}>Description: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription} 
                        />
                    </div>

                    <div className = "form-group">
                        <label style = {{color: "white"}}>Notes: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.notes}
                            onChange = {this.onChangeNotes} 
                        />
                    </div>

                    <div className = "form-group">
                        <label style = {{color: "white"}}>Date: </label>
                        <div>
                            <DatePicker 
                                selected = {this.state.date}
                                onChange = {this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create Exercise Log" className = "btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}