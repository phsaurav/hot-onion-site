import React from 'react';
import bg from '../../assets/signup-bg.png';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Register = () => {
	return (
		<div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
			<img
				src={bg}
				alt="Signup Background"
				className="fixed bottom-0 bg-no-repeat w-screen"
				style={{ zIndex: '-5' }}
			/>
			<Link to="/home">
				<button
					type="button"
					className="bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
					style={{ color: '#ff2f59' }}
				>
					<MdClose></MdClose>
				</button>
			</Link>
			<div className="flex flex-col justify-center items-center h-screen">
				<img src={logo} alt="Logo" className="h-20" />

				<form className="mt-12 mb-40">
					<input
						type="text"
						placeholder="Name"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="text"
						placeholder="Email"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Password"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<button
						className="text-white py-2 px-7 w-80 rounded-md"
						style={{ backgroundColor: '#ff2f59' }}
					>
						Sign Up
					</button>
					<br />
					<Link to="/login">
						<p
							className="text-center py-3 font-semibold"
							style={{ color: '#ff2f59' }}
						>
							Already have an account
						</p>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Register;
