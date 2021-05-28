import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
	const [
		isLoggedIn,
		setIsLoggedIn
	] = useState(false);

	useEffect(() => {
		const storedUserInformation = localStorage.getItem('isLoggedIn');

		if (storedUserInformation === 'LOGGED_IN') {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', 'LOGGED_IN');
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
