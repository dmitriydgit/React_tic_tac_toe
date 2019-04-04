import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
          </p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
          </a>
				</header>
				<div className="shopping-list">
					<h1>Shopping List for {this.props.name}</h1>
					<ul>
						<li>Instagram</li>
						<li>WhatsApp</li>
						<li>Oculus</li>
					</ul>
				</div>
			</div>

		);
	}
}

export default App;


