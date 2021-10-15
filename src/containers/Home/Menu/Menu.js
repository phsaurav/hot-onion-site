import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="">
			<div className="flex justify-center">
				<NavLink
					to="/home/breakfast"
					activeStyle={{
						borderBottom: '3px solid #F71843',
						color: '#F71843',
					}}
					className=" mx-5 my-5 font-bold"
				>
					Breakfast
				</NavLink>
				<NavLink
					to="/home/lunch"
					className=" mx-5 my-5 font-bold"
					activeStyle={{
						borderBottom: '3px solid #F71843',
						color: '#F71843',
					}}
				>
					Lunch
				</NavLink>
				<NavLink
					to="/home/Dinner"
					className=" mx-5 my-5 font-bold"
					activeStyle={{
						borderBottom: '3px solid #F71843',
						color: '#F71843',
					}}
				>
					Dinner
				</NavLink>
			</div>
		</div>
	);
};

export default Menu;
