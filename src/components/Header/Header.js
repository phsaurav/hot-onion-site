import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div>
			<div className="flex flex-wrap place-items-center">
				<section className="relative mx-auto">
					<nav className="flex justify-between bg-white text-black w-screen">
						<div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
							<NavLink to="/home">
								<img className="h-8" src={logo} alt="logo" />
							</NavLink>
							{/* <!-- Header Icons --> */}
							<div className="hidden sm:flex items-center space-x-10">
								<NavLink
									className="flex items-center hover:text-gray-200"
									to="/cart"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</NavLink>
								{/* <!-- Sign In / Register      --> */}
								<NavLink to="/login" className="font-semibold">
									Login
								</NavLink>
								<NavLink
									to="/register"
									className="bg-red-500 rounded-full font-semibold text-white px-6 py-1 transition duration-300 ease-in-out hover:bg-red-600 mr-8"
								>
									Sign Up
								</NavLink>
							</div>
						</div>
						{/* <!-- Responsive navbar --> */}
						<NavLink
							className="sm:hidden flex mr-6 items-center"
							to="/cart"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</NavLink>
						<button
							className="navbar-burger self-center mr-12 sm:hidden"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 hover:text-gray-200"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
						<div
							className={
								'lg:flex flex-grow items-center' +
								(navbarOpen ? ' flex' : ' hidden')
							}
							id="example-navbar-danger"
						>
							<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Share</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Tweet</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Pin</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</section>
			</div>
		</div>
	);
};

export default Header;
