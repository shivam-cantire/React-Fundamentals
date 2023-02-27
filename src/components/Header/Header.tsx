import styles from './Header.module.css';
import Logo from './components/Logo/Logo';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Button from 'src/common/Button/Button';
import React, { useEffect } from 'react';
import IUserInfo from 'src/interfaces/i-userInfo';
import { getUser } from 'src/api/api';
export default function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const [currentUser, setCurrentUser] = React.useState<IUserInfo>({});
	const logout = () => {
		localStorage.removeItem('auth-token');
		setCurrentUser({});
		navigate('/login');
	};
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/login');
		}
		getCurrentUser();
	}, []);

	const getCurrentUser = async () => {
		const authToken = localStorage.getItem('auth-token');
		const headers = {
			'Content-Type': 'application/json',
			Authorization: authToken,
		};
		if (authToken != null) {
			const response = await getUser('users/me', headers);
			if (response.status == 200) {
				const resultObj = await response.json();
				setCurrentUser(resultObj.result);
			}
		} else {
			navigate('/login');
		}
	};
	return (
		<>
			<div className={styles.header}>
				<div className={styles.leftWrapper}>
					<Logo />
					<span>
						<strong>Courses</strong>
					</span>
				</div>
				{currentUser ? (
					<div className={styles.rightWrapper}>
						<span>
							<strong>{currentUser.name}</strong>
						</span>
						<Button
							onClick={logout}
							style={styles.logoutBtn}
							label={'Logout'}
						/>
					</div>
				) : (
					<></>
				)}
			</div>
			<Outlet />
		</>
	);
}
