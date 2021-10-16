import React from 'react';
import bg from '../../assets/signup-bg.png';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { processLogin, setEmail, setPassword, error, setError } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/home';

	const handleSignIn = (e) => {
		e.preventDefault();

		processLogin()
			.then((res) => {
				const user = res.user;
				console.log(user);
				setError('');
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="w-full h-full fixed block top-0 left-0 bg-white  z-50">
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

				<form className="mt-12 mb-96" onSubmit={handleSignIn}>
					<input
						type="text"
						placeholder="Email"
						onBlur={handleEmailChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Password"
						onBlur={handlePasswordChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<button
						className="text-white py-2 px-7 w-80 rounded-md"
						style={{ backgroundColor: '#ff2f59' }}
					>
						Log In
					</button>
					<br />
					<Link to="/register">
						<p
							className="text-center py-3 font-semibold"
							style={{ color: '#ff2f59' }}
						>
							New user?
						</p>
					</Link>
					<p
						className="text-center py-3 font-semibold"
						style={{ color: '#ff2f59' }}
					>
						{error}
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
