import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/style.css';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/character/:id'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
