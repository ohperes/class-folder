import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingUp from './pages/SingUp';
import Login from './pages/SingIn';

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}/>
				<Route path="/SingUp" component={SingUp}/>
				<Route path="*" component={Login} />
			</Switch>
		</BrowserRouter>
	)
}
