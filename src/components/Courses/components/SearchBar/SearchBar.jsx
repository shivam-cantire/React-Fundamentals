import styles from '../../Courses.module.css';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
export default function SearchBar(Props) {
	const search = () => {
		alert('I am clicked from search');
	};
	return (
		<div className={styles.searchBar}>
			<Input placeholder={'Enter course name...'} type={'text'} />
			<div>
				<Button onClick={search} label={'Search'} />
				<Button
					onClick={Props.createCourse}
					style={styles.addCourse}
					placeholder={'Enter course name...'}
					label={'Add new Course'}
				/>
			</div>
		</div>
	);
}
