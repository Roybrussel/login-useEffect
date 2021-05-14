import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
	const storedUserInformation = localStorage.getItem('isLoggedIn');

	if (storedUserInformation === 'LOGGED_IN') {
		setIsLoggedIn(true);
	}

	const [
		isLoggedIn,
		setIsLoggedIn
	] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', 'LOGGED_IN');
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</React.Fragment>
	);
}

export default App;
