import React from 'react';
import Card from './Card/Card';

const About = () => {
	return (
		<div className="container mx-auto ">
			<div className="flex justify-center mt-10 mb-20">
				<button className="bg-gray-300 text-white py-2 px-7 rounded-md">
					Checkout Your Food
				</button>
			</div>
			<h1 className="text-3xl">Why you choose us</h1>
			<p className="text-sm w-4/6 font-semibold my-6">
				RED ONION is the collaborative outcome of seasoned food &
				business operators who have combined their past 25 years’
				industry experience to create this exciting dining offer.
			</p>
			<Card></Card>
		</div>
	);
};

export default About;
