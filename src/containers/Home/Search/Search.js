import React from 'react';
import Meal from '../Meal/Meal';

const Search = ({ displayMeals }) => {
	console.log(displayMeals);
	return (
		<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container mx-auto">
			{displayMeals.map((meal) => (
				<Meal key={meal.key} meal={meal}></Meal>
			))}
		</div>
	);
};

export default Search;
