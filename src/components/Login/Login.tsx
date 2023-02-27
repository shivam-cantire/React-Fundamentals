import React, { useState, FormEvent } from 'react';
import styles from './Login.module.scss';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';
import { useNavigate, Link } from 'react-router-dom';
import { saveUser } from 'src/api/api';

export default function Login({ registrationStatus }): JSX.Element {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errorMsg, setErrorMsg] = useState<string>('');
	const [customMsg, setcustomMsg] = useState<string>('');
	const navigate = useNavigate();
	React.useEffect(() => {
		if (localStorage.getItem('auth-token') != null) {
			navigate('/courses');
		}
		if (registrationStatus) {
			setcustomMsg(
				'Registration Successful! Use registration creadentials to log in.'
			);
		}
	}, []);
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const userDetail = {
			email,
			password,
		};
		const response = await saveUser(userDetail, 'login');
		const resultObj = await response.json();
		if (response.status === 201) {
			localStorage.setItem('auth-token', resultObj.result);
			navigate('/courses');
		} else {
			const error = resultObj.errors ? resultObj.errors[0] : resultObj.result;
			setErrorMsg(error);
		}
	};

	return (
		<div className={styles.loginContainer}>
			{errorMsg ? (
				<label className={styles.error}>{errorMsg.replace(/'/g, '')}</label>
			) : (
				<></>
			)}
			{customMsg ? (
				<label className={styles.success}>{customMsg}</label>
			) : (
				<></>
			)}

			<label>Login</label>
			<form onSubmit={handleSubmit} className={styles.loginForm}>
				<div>
					<Input
						style={styles.loginInput}
						onChange={handleEmailChange}
						placeholder={'Enter Email'}
						label={'Email'}
					/>
				</div>
				<div>
					<Input
						type={'password'}
						style={styles.loginInput}
						onChange={handlePasswordChange}
						placeholder={'Enter Password'}
						label={'Password'}
					/>
				</div>
				<div>
					<Button
						disabled={!email || !password}
						style={styles.loginButton}
						label={'Login'}
					/>
					<label>
						&nbsp;&nbsp;<Link to='/registration'>Register</Link>
					</label>
				</div>
			</form>
		</div>
	);
}
