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
	const addNewCourses = (newCourses, newAuthors) => {
		setAthorsList([...authorsList, ...newAuthors]);
		setCoursesList([...courseList, ...newCourses]);
	};
	return (
		<div className={styles.container}>
			<Header />
			<Courses
				courses={courseList}
				authors={authorsList}
				onCreateCourse={handleShowHideCourse}
				display={showCourses}
			/>
			<CreateCourse
				appendNewCourses={addNewCourses}
				onSubmitCreateCourse={handleShowHideCourse}
				display={showCreateCourse}
			/>
		</div>
	);
}

export default App;
