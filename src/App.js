import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';

function App() {
	return (
		<Router>
			<Switch>
				{/* Switch: Route를 찾아 줌 */}
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
