import styles from './Courses.module.scss';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from 'src/constants/contants';
import React from 'react';
export default function Courses({ newAuthors, newCourse }) {
	const [courseList, setCourseList] = React.useState<any>(mockedCoursesList);
	const [authorList, setAuthorList] = React.useState<any>(mockedAuthorsList);
	React.useEffect(() => {
		setCourseList([...courseList, ...newCourse]);
		setAuthorList([...authorList, ...newAuthors]);
	}, []);
	return (
		<div className={styles.coursesContainer}>
			<div>
				<SearchBar />
				{courseList.map((course, index) => (
					<CourseCard key={index} authors={authorList} courseDetail={course} />
				))}
			</div>
		</div>
	);
}
