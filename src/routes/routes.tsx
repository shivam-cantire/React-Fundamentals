import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Registration from 'src/components/Registration/Registration';
import Login from 'src/components/Login/Login';
import Header from 'src/components/Header/Header';
import Courses from 'src/components/Courses/Courses';
import CreateCourse from 'src/components/CreateCourse/CreateCourse';
import IUserInfo from 'src/interfaces/i-userInfo';
import CoursesInfo from 'src/components/CourseInfo/CourseInfo';
import ICourseInfo from 'src/interfaces/i-courseInfo';
import IAuthorInfo from 'src/interfaces/i-authorInfo';
export default function RoutesPath() {
	const [registrationStatus, setRegistrationStatus] =
		React.useState<boolean>(false);
	const [newCourse, setNewCourse] = React.useState<any>([]);
	const [newAuthors, setNewAuthors] = React.useState<any>([]);
	const handleRegistrationStatus = (status: boolean) => {
		setRegistrationStatus(status);
	};
	const handleAddCourse = (newCourse: ICourseInfo, newAuthors: IAuthorInfo) => {
		console.log(newCourse, newAuthors);
		setNewCourse(newCourse);
		setNewAuthors(newAuthors);
	};
	return (
		<>
			<Routes>
				<Route
					path='registration'
					element={
						<Registration setRegistrationStatus={handleRegistrationStatus} />
					}
				/>
				<Route
					path='login'
					element={<Login registrationStatus={registrationStatus} />}
				/>
				<Route path='/' element={<Header />}>
					<Route
						path='courses'
						element={<Courses newAuthors={newAuthors} newCourse={newCourse} />}
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
