import React from 'react';

const Card = () => {
	return (
		<div>
			<div className="overflow-hidden h-auto w-80 lg:w-80 cursor-pointer mx-auto bg-white transition duration-500 ease-in-out transform hover:shadow-2xl my-5 rounded-2xl">
				<img
					src="https://i.ibb.co/XxM6wDf/adult-blur-blurred-background-687824.png"
					className="h-80 transition-height duration-500 ease-in-out hover:h-96 w-full object-cover rounded-2xl"
				/>
				<div className="w-full px-4 pb-4">
					<p className="text-gray-800 dark:text-white text-lg font-medium my-2">
						Fast Delivery
					</p>
					<p className="text-gray-500 text-xs">
						RED ONION is the collaborative outcome of seasoned food
						& business operators who have combined their past 25
						years’ industry experience to create this exciting
						dining offer.
					</p>
					<p className="text-blue-400 font-semibold py-2 text-sm">
						See More
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
