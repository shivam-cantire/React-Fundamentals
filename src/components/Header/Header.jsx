import styles from './Header.module.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
export default function Header() {
	const logout = () => {
		alert('I am clicked from logout');
	};
	return (
		<div className={styles.header}>
			<div className={styles.leftWrapper}>
				<Logo />
				<span>
					<strong>Courses</strong>
				</span>
			</div>
			<div className={styles.rightWrapper}>
				<span>
					<strong>Shivam</strong>
				</span>
				<Button onClick={logout} style={styles.logoutBtn} label={'Logout'} />
			</div>
		</div>
	);
}
