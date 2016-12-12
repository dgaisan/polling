import React, {Component} from 'react';
import Display from './../views/display';

export default class Visitor extends Component {
	render() {
		return (
			<div>
				<Display show={this.props.status === 'connected'}>
					<h2>Join the conference!</h2>
				</Display>
			</div>
		)
	}
}
