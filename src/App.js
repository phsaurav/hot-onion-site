// *Imports
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './containers/NotFound/NotFound';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
	return (
		<div>
			<Router>
				<div className="flex flex-col justify-between h-screen">
					<div>
						<Header></Header>
						<Switch>
							<Route exact path="/">
								<Home></Home>
							</Route>
							<Route path="/home">
								<Home></Home>
							</Route>
							<Route path="/login">
								<Login></Login>
							</Route>
							<Route path="/register">
								<Register></Register>
							</Route>
							<Route>
								<NotFound></NotFound>
							</Route>
						</Switch>
					</div>
					<Footer></Footer>
				</div>
			</Router>
		</div>
	);
}

export default App;
