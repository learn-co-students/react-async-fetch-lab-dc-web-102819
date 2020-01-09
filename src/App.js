import React, { Component } from "react";


export default class App extends Component {

    state = { something: []}

    // grab(data) {
    //     // return data.map(datum => datum.keys[0].map(key => key.toString()))
    //     // return data.map(person => person.name)
    // }

    render() {
        // debugger
        return <div>{this.state.something.map(person => person.name)}</div>
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => this.setState(
            {something: data.people}))
    }
 
}