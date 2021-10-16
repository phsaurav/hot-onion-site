import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="bg-white relative z-20">
				<div className="container mx-auto">
					<div className="bg-white text-black py-3 ">
						<div className="flex items-center justify-between">
							<NavLink to="/home">
								<img className="h-8" src={logo} alt="logo" />
							</NavLink>
							<div>
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
									{user.displayName ? (
										<div className="flex items-center">
											<p className="font-semibold">
												{user.displayName}
											</p>
											<button
												onClick={logOut}
												className="signup-btn rounded-full text-white px-7 py-2 ml-5 transition duration-300 ease-in-outmr-8"
											>
												Sign Out
											</button>
										</div>
									) : (
										<div className="flex items-center">
											{' '}
											<NavLink
												to="/login"
												className="font-semibold"
												activeStyle={{
													color: '#F71843',
												}}
											>
												Login
											</NavLink>
											<NavLink
												to="/register"
												className="signup-btn rounded-full text-white px-7 py-2 ml-5  transition duration-300 ease-in-outmr-8"
											>
												Sign Up
											</NavLink>
										</div>
									)}
								</div>
							</div>
						</div>

						<div className="-mr-2 sm:hidden flex absolute right-5 top-2">
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
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-white inline-flex items-center justify-center p-2 rounded-xl text-gray-800 hover:text-gray-200 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="sm:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="px-2 pt-2 pb-3 space-y-0 sm:px-3 text-center"
							>
								{user.displayName ? (
									<div className="flex items-center flex-col">
										<p className="font-semibold text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base w-full">
											{user.displayName}
										</p>
										<button
											onClick={logOut}
											className="font-semibold text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base w-full"
										>
											Sign Out
										</button>
									</div>
								) : (
									<div className="flex items-center flex-col">
										{' '}
										<NavLink
											to="/login"
											className="font-semibold text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base w-full"
										>
											Login
										</NavLink>
										<NavLink
											to="/register"
											className="font-semibold text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base w-full"
										>
											Sign Up
										</NavLink>
									</div>
								)}
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Header;
