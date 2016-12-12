import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';


import App from './components/app';
import Visitor from './components/visitor';
import Speaker from './components/speaker';
import Board from './components/board';
import PageNotFound from './components/pagenotfound';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Visitor}></IndexRoute>
			<Route path='speaker' component={Speaker}></Route>
			<Route path='board' component={Board}></Route>
			<Route path="*" component={PageNotFound}></Route>
		</Route>
	</Router>
);

// Rendering Main Component
ReactDOM.render(routes, document.getElementById('container'));
