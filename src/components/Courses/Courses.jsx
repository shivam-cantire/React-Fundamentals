import styles from './Courses.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import React from 'react';
export default function Courses(Props) {
	const courseList = Props.courses;
	const authorsList = Props.authors;
	const showHideCourse = () => {
		Props.onCreateCourse(true);
	};
	return (
		<div className={styles.coursesContainer}>
			<div>
				<SearchBar createCourse={showHideCourse} />
				{courseList.map((course, index) => (
					<CourseCard key={index} authors={authorsList} courseDetail={course} />
				))}
			</div>
		</div>
	);
}
