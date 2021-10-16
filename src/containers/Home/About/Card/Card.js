import React from 'react';

import './Card.css';

const Card = ({ children, img }) => {
	return (
		<div>
			<div className="overflow-hidden h-auto w-80 lg:w-80 cursor-pointer mx-5 lg:mx-12 bg-white transition duration-500 ease-in-out transform hover:shadow-2xl my-5 rounded-2xl ">
				<img
					src={img}
					className="h-80 transition-height duration-500 ease-in-out hover:h-96 w-full object-cover rounded-2xl"
				/>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Card;
