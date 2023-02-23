import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from './constants/contants';
import styles from './App.module.css';
import React from 'react';

function App() {
	const [showCreateCourse, setShowCreateCourse] = React.useState(false);
	const [showCourses, setShowCourses] = React.useState(true);

	const [courseList, setCoursesList] = React.useState(mockedCoursesList);
	const [authorsList, setAthorsList] = React.useState(mockedAuthorsList);

	const handleShowHideCourse = (showCreate) => {
		if (showCreate) {
			setShowCreateCourse(true);
			setShowCourses(false);
		} else {
			setShowCreateCourse(false);
			setShowCourses(true);
		}
	};
	// const handleToShowCourseListAndHideCreateCourse = () => {};
	// const handleToHideCourseListAndShowCreateCourse = () => {};
	const addNewCourse = (newCourses, newAuthors) => {
		setAthorsList([...authorsList, ...newAuthors]);
		setCoursesList([...courseList, ...newCourses]);
	};
	return (
		<div className={styles.container}>
			<Header />
			{showCourses ? (
				<Courses
					courses={courseList}
					authors={authorsList}
					onCreateCourse={handleShowHideCourse}
				/>
			) : (
				<></>
			)}
			{showCreateCourse ? (
				<CreateCourse
					appendNewCourses={addNewCourse}
					onSubmitCreateCourse={handleShowHideCourse}
				/>
			) : (
				<></>
			)}
		</div>
	);
}

export default App;
