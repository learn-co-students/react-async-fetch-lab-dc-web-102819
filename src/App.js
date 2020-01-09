import React, {Component} from 'react'
import { List, Container } from 'semantic-ui-react'

class App extends Component {
	constructor() {
		super()
		this.state = {
			astronauts: []
		}
	}
	
	componentDidMount = () => {
		fetch('http://api.open-notify.org/astros.json')
			.then(response => response.json())
			.then(issData => this.setState({ astronauts: issData.people }))
	}

	render(){
		return (
			<Container>
				<List>
					{this.state.astronauts.map((astro, index) => <List.Item key={index}>{astro.name}</List.Item>)}
				</List>
			</Container>
		)
	}
}

export default App

/*
import { List } from 'semantic-ui-react'

const ListExampleBasic = () => (
  <List>
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
*/