// create your App component here
import React, { Component } from 'react';

export default class App extends Component{

    constructor(){
        super()
        this.state={
            astros:[]
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => {
            this.setState({
                astros:data
            })
        })
    }
    
    render() {
        return (
            <div>HI!</div>
        );
    }
}