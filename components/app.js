import React, {Component} from 'react';
import io from 'socket.io-client';

import Header from './headers/header';

const SERVER_ENDPOINT = 'http://localhost:3000';

/**
* Root component that manages the state of the application.
*/
class App extends Component {
	constructor() {
		super();

		this._setUpInitialState.call(this);

		// Autobind local methods to this
		this._onConnect = this._onConnect.bind(this);
		this._onDisconnect = this._onDisconnect.bind(this);
		this._onWelcome = this._onWelcome.bind(this);

		// connecting to the server
		this.socket = io(SERVER_ENDPOINT);

		// setting up event listeners
		this.socket.on('connect', this._onConnect);
		this.socket.on('disconnect', this._onDisconnect);
		this.socket.on('welcome', this._onWelcome);
	}

	// Setting up initial state
	_setUpInitialState() {
		this.state = {
			status: 'disconnected',
			title: ''
		};
	}

	// Triggered when a new socket connection occurs
	_onConnect() {
		this.setState({status: 'connected'});
	}

	// Triggered when a new socket disconnection occurs
	_onDisconnect() {
		this.setState({status: 'disconnected'});
	}

	/** 
	* Fired when 'Welcome' event is emmited
	* @param {string} state - state of the server  
	*/
	_onWelcome(serverState) {
		this.setState({ title: serverState.title });
	}

	render() {
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
				{this.props.children}
			</div>
		);
	}
}

export default App;