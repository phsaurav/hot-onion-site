import Menu from './Menu/Menu';
import React, { useState } from 'react';
import Hero from './Hero/Hero';
import { Switch, Route, useHistory } from 'react-router-dom';
import Breakfast from './Breakfast/Breakfast';
import Lunch from './Lunch/Lunch';
import Dinner from './Dinner/Dinner';
import Search from './Search/Search';
import useMeals from '../../hooks/useMeals';
import About from './About/About';

const Home = () => {
	const [meals] = useMeals();
	const [displayMeals, setDisplayMeals] = useState([]);
	const history = useHistory();
	const handleSearch = (e) => {
		const searchText = e.target.value;
		history.push('/home/search');
		const matchedMeals = meals.filter((meal) =>
			meal.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayMeals(matchedMeals);
	};
	return (
		<div className="mx-auto">
			<Hero handleSearch={handleSearch}></Hero>
			<Menu></Menu>
			<Switch>
				<Route path="/" exact>
					<Breakfast></Breakfast>
				</Route>
				<Route path="/home" exact>
					<Breakfast></Breakfast>
				</Route>
				<Route path="/home/breakfast" exact>
					<Breakfast></Breakfast>
				</Route>
				<Route path="/home/lunch">
					<Lunch></Lunch>
				</Route>
				<Route path="/home/dinner">
					<Dinner></Dinner>
				</Route>
				<Route path="/home/search">
					<Search displayMeals={displayMeals}></Search>
				</Route>
			</Switch>
			<About></About>
		</div>
	);
};

export default Home;
