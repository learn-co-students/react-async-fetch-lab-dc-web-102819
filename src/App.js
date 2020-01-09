import React from 'react'


export default class App extends React.Component {
        constructor() {
            super()
            this.state = {
                peopleInSpace: []
            }
        }

        render(){
            console.log(this.state.peopleInSpace)
            return (
            <div>
               {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
             </div>
        )
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data  => this.setState({peopleInSpace: data.people}))
    }
    
}