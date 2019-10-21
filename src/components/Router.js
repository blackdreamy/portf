import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Profile from './Profile';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}/>
			<Route path='/profile' component={Profile}></Route>
			<Route path='/resume' component={Resume}></Route>
			<Route path='/portfolio' component={Portfolio}></Route>
			<Route path='/contact' component={Contact}></Route>
		</Switch>
	</BrowserRouter>
)

export default Router;