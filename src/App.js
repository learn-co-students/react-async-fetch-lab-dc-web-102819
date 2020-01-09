import React, { Component } from "react";


export default class App extends Component {
    render() {
        return <div>My App</div>
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
    }
}