import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/style.css';

function App() {
	return (
		<h1>Index</h1>
		// <Router>
		// 	<Switch>
		// 		{/* Switch: Route를 찾아 줌 */}
		// 		<Route path='/movie/:seq'>
		// 			<Detail />
		// 		</Route>
		// 		<Route path='/'>
		// 			<Home />
		// 		</Route>
		// 	</Switch>
		// </Router>
	);
}

export default App;
