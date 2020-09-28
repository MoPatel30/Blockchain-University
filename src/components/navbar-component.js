import React from "react";
import { render } from "react-dom";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className = "navbar navbar-light bg-light navbar-expand">
                
                <Link to = "/" className = "navbar-brand">Workout Tracker</Link>
                
                <div className = "collapse navbar-collapse">

                    <ul className = "navbar-nav mr auto">
                        <li className = "navbar-item">
                        <Link to = "/" className = "nav-link">Workout</Link>
                        </li>

                        <li className = "navbar-item">
                        <Link to = "/create" className = "nav-link">Create Workout Log</Link>
                        </li>

                        <li className = "navbar-item">
                        <Link to = "/user" className = "nav-link">Create User</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}