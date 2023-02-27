import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Registration from 'src/components/Registration/Registration';
import Login from 'src/components/Login/Login';
import Header from 'src/components/Header/Header';
import Courses from 'src/components/Courses/Courses';
import CreateCourse from 'src/components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from 'src/constants/contants';
import CoursesInfo from 'src/components/CourseInfo/CourseInfo';
import ICourseInfo from 'src/interfaces/i-courseInfo';
import IAuthorInfo from 'src/interfaces/i-authorInfo';
export default function RoutesPath() {
	const [courses, setCourses] = React.useState(mockedCoursesList);
	const [authors, setAuthors] = React.useState(mockedAuthorsList);

	const handleAddCourse = (
		newCourse: [ICourseInfo],
		newAuthors: [IAuthorInfo]
	) => {
		setCourses([...courses, ...newCourse]);
		setAuthors([...authors, ...newAuthors]);
	};
	return (
		<>
			<Routes>
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='/' element={<Header />}>
					<Route
						path='courses'
						element={<Courses courses={courses} authors={authors} />}
					/>
					<Route path='course-info/:courseId' element={<CoursesInfo />} />
					<Route
						path='courses/add'
						element={<CreateCourse addCourse={handleAddCourse} />}
					/>
				</Route>
				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</>
	);
}
