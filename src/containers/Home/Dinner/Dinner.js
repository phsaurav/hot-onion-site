import React from 'react';
import useMeals from '../../../hooks/useMeals';
import Meal from '../Meal/Meal';

const Dinner = () => {
	const [meals] = useMeals();
	console.log(meals);
	return (
		<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container mx-auto">
			{meals.map(
				(meal) =>
					meal.catagory === 'dinner' && (
						<Meal key={meal.key} meal={meal}></Meal>
					)
			)}
		</div>
	);
};

export default Dinner;
