import React from "react";
import axios from "axios";



export default class CreateUser extends React.Component{
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username : "",
           
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            username : this.state.username,
        }
        console.log(user)

        axios.post("http://track-your-work-out.web.app/users/add", user)
            .then(res => console.log(res.data))
        
        this.setState({
            username : ""
        })
    }
    

    render(){
        return(
            <div>
                <h1 style = {{color: "white"}}>Create New User</h1>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label style = {{color: "white"}}>Username: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername} 
                        />
                    </div>

                    <div className = "form-group">
                        <input type = "submit" style = {{color: "white"}} value = "Create User" className = "btn btn-priamry" />
                    </div>
                </form>
            </div>
        )
    }
}