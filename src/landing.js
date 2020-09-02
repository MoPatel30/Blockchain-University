import React from 'react';

import './landing.css';


export class Welcome extends React.Component{
    render(){
        return(
            <div style = {{backgroundColor: "blue"}}>
                <h1> Welcome to Blockchain University</h1>
            </div>
        )
    }
}