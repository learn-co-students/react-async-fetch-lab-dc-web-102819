// create your App component here

import React from 'react'

class App extends React.Component {

    state = {
        returnedArray: []
    }
   
    render() {

    return(
        <div>
        {this.state.returnedArray.map((person,id) => <h1 key={id}>{person.name}</h1>)}    
        </div>) 
    }

    componentDidMount = () => {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ returnedArray: people }))
    }


 
}

export default App 



//   render() {
//     return (
//       <div>
//         {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
//       </div>
//     )
// //   }

//   componentDidMount() {
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(({people}) => this.setState({ peopleInSpace: people }))

//   }
