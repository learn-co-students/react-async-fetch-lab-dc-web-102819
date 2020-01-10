import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      astros: []
    }
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(astrosData => this.setState({astros: astrosData.people}))
    .catch(err => console.warn(err.message))
  }
  render(){
    // console.log(this.state.astros)
    return (
      <div>
        {this.state.astros.map( people => <div key={people.name}>{people.name}</div>)}
      </div>
    )
  }
}
export default App
