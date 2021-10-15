import React from 'react';
import logo from '../../assets/logo_lite.png';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div className=" w-full mt-10">
				<footer className="text-white body-font dark-gray static bottom-0">
					<div className="container px-5 py-16 md:py-16 mx-auto flex justify-between md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
						<div className="w-64  md:mx-0 mx-auto flex justify-center md:justify-start">
							<img
								className="h-8 md:mb-28"
								src={logo}
								alt="logo"
							/>
						</div>
						<div className="flex flex-grow justify-end md:text-left text-center text-sm">
							<div className="md:w-40 w-full px-2 hidden lg:mr-28 md:block">
								<nav className="list-none mb-10">
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											About Online Food
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Read our blog
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Sign up to deliver
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Add your resturent
										</p>
									</li>
								</nav>
							</div>
							<div className="md:w-40 w-full pl-7 hidden md:block">
								<nav className="list-none mb-10">
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Get Help
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Read FAQ
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											View all cities
										</p>
									</li>
									<li>
										<p className="text-white hover:text-gray-300 py-1">
											Resturent near me
										</p>
									</li>
								</nav>
							</div>
						</div>
					</div>
					<div className="dark-gray">
						<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
							<p className="text-gray-600 text-sm text-center sm:text-left">
								© 2021 Dev —
								<a
									href="https://www.facebook.com/phsaurav/"
									rel="noopener noreferrer"
									className="text-gray-500 ml-1 "
									target="_blank"
								>
									@PH_Saurav
								</a>
							</p>
							<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-sm">
								<p className="ml-5">Privacy Plicy</p>
								<p className="ml-5">Terms of Use</p>
								<p className="ml-5">Pricing</p>
							</span>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
