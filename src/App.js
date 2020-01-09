// create your App component here
import React from 'react'

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			spacePeople: []
		}

	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(resp => resp.json())
		.then(data => {
			console.log(data)
			this.setState({
				spacePeople: data.people
			})
		})
	}

	render() {
		return( <div>{this.state.spacePeople.map(person =>
			<div>{person.name}</div>

		)}
		</div>)
	}
}