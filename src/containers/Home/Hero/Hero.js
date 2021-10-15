import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../assets/cover.png';
import './Hero.css';

const Hero = (props) => {
	return (
		<div
			className="relative flex flex-col items-center justify-center"
			style={{ height: '500px' }}
		>
			<div
				className="absolute top-0 w-full left-0 object-top object-fill mx-0"
				style={{
					backgroundImage: `url(${cover})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					height: '500px',
				}}
			></div>
			<div className="container relative z-20 text-center flex flex-col items-center justify-center mx-auto">
				<h1 className="text-5xl font-semibold pb-8">
					Best Food Waiting For your belly
				</h1>
				<div className="bg-white w-96 flex flex-row justify-between h-10 pl-5 rounded-full">
					<input
						type="text"
						placeholder="Search food items"
						className="text-sm w-80"
						onChange={props.handleSearch}
						style={{ outline: 'none' }}
					/>
					<Link to="/home/search" className="rounded-full">
						<button className="px-7 h-10 rounded-full text-white text-sm search-btn">
							Search
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
