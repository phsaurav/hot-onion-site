import React from 'react';
import Card from './Card/Card';
import { FaArrowRight, FaBus, FaRegBell } from 'react-icons/fa';
import { MdOutlineLocalShipping } from 'react-icons/md';

const About = () => {
	return (
		<div className="container mx-auto">
			<div className="flex justify-center mt-10 mb-20">
				<button className="bg-gray-300 text-white py-2 px-7 rounded-md">
					Checkout Your Food
				</button>
			</div>
			<div className="w-11/12 2xl:w-9/12 mx-auto">
				<h1 className="text-3xl">Why you choose us</h1>
				<p className="text-sm w-5/6 lg:w-4/6 font-semibold my-6">
					RED ONION is the collaborative outcome of seasoned food &
					business operators who have combined their past 25 years’
					industry experience to create this exciting dining offer.
				</p>
			</div>
			<div className="flex flex-wrap container mx-auto justify-center">
				<Card img="https://i.ibb.co/XxM6wDf/adult-blur-blurred-background-687824.png">
					<div className="flex p-2">
						<div className="red-color text-white rounded-full p-3 text-xs h-full mt-4 ml-1">
							<FaBus></FaBus>
						</div>
						<div className="w-5/6 mx-auto pl-2 pr-4 pb-4">
							<p className="text-gray-800 dark:text-white text-lg font-medium my-2">
								Fast Delivery
							</p>
							<p className="text-gray-500 text-xs">
								RED ONION is the collaborative outcome of
								seasoned food & business operators who have
								combined their past 25 years.
							</p>
							<p className="text-blue-400 font-semibold pb-1 pt-4 text-sm flex items-center">
								See More{' '}
								<span className="mx-2 bg-green-300 text-white rounded-full p-1 text-xs">
									<FaArrowRight></FaArrowRight>
								</span>
							</p>
						</div>
					</div>
				</Card>
				<Card img="https://i.ibb.co/54g4Gqk/chef-cook-food-33614.png">
					<div className="flex p-2">
						<div className="red-color text-white rounded-full p-3 text-xs h-full mt-4 ml-1">
							<FaRegBell></FaRegBell>
						</div>
						<div className="w-5/6 mx-auto pl-2 pr-4 pb-4">
							<p className="text-gray-800 dark:text-white text-lg font-medium my-2">
								A Good Auto Responder
							</p>
							<p className="text-gray-500 text-xs">
								RED ONION is the collaborative outcome of
								seasoned food & business operators who have
								combined their past 25 years.
							</p>
							<p className="text-blue-400 font-semibold pb-1 pt-4 text-sm flex items-center">
								See More{' '}
								<span className="mx-2 bg-green-300 text-white rounded-full p-1 text-xs">
									<FaArrowRight></FaArrowRight>
								</span>
							</p>
						</div>
					</div>
				</Card>
				<Card img="https://i.ibb.co/RzhfHsm/architecture-building-city-2047397.png">
					<div className="flex p-2">
						<div className="red-color text-white rounded-full p-3 text-sm h-full mt-4 ml-1">
							<MdOutlineLocalShipping></MdOutlineLocalShipping>
						</div>
						<div className="w-5/6 mx-auto pl-2 pr-4 pb-4">
							<p className="text-gray-800 dark:text-white text-lg font-medium my-2">
								Fast Delivery
							</p>
							<p className="text-gray-500 text-xs">
								RED ONION is the collaborative outcome of
								seasoned food & business operators who have
								combined their past 25 years.
							</p>
							<p className="text-blue-400 font-semibold pb-1 pt-4 text-sm flex items-center">
								See More{' '}
								<span className="mx-2 bg-green-300 text-white rounded-full p-1 text-xs">
									<FaArrowRight></FaArrowRight>
								</span>
							</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default About;
