import React, {Component} from 'react';


export default class Visitor extends Component {
	render() {
		return (<h1>Visitor : {this.props.status}</h1>);
	}
}
