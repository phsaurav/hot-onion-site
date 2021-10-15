import React from 'react';

const Meal = (props) => {
	const { img, name, price, subtitle } = props.meal;
	return (
		<div>
			<div className="overflow-hidden h-auto w-80 lg:w-96 cursor-pointer mx-auto px-2 py-5 bg-white transition duration-500 ease-in-out transform hover:shadow-2xl my-5 rounded-2xl">
				<img
					alt={name}
					src={img}
					className="max-h-60 w-full object-contain"
				/>
				<div className="w-full">
					<p className="text-gray-800 dark:text-white text-lg font-medium mt-2 text-center">
						{name}
					</p>
					<p className="text-center text-gray-500">{subtitle}</p>
					<h1 className="text-center text-black text-3xl mt-2">
						${price}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Meal;
