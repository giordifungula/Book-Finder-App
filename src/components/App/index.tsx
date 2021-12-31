import React from 'react';
import {
	Switch,
	withRouter,
	RouteComponentProps,
	Route,
	Redirect,
} from 'react-router-dom';
// @components
import Home from 'components/Home';
import Header from 'components/Layouts/Header';
import About from 'components/About';
import Book from 'components/Book';

const App = ({ location }: RouteComponentProps) => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/book/:id" component={Book} />
				<Route path="*">
					<Route render={() => <Redirect to="/" />} />
				</Route>
			</Switch>
		</>
	);
};

export default withRouter(App);
