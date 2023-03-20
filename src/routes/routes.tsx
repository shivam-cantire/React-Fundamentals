import { Routes, Route, Navigate } from 'react-router-dom';

import React from 'react';
import Registration from 'src/components/Registration/Registration';
import Login from 'src/components/Login/Login';
import Header from 'src/components/Header/Header';
import Courses from 'src/components/Courses/Courses';
import CourseForm from 'src/components/CourseForm/CourseForm';
import CoursesInfo from 'src/components/CourseInfo/CourseInfo';
import PrivateRoute from 'src/components/PrivateRoute/PrivateRoute';

export default function RoutesPath() {
	return (
		<>
			<Routes>
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='/' element={<Header />}>
					<Route path='courses' element={<Courses />} />
					<Route path='course-info/:courseId' element={<CoursesInfo />} />
					<Route
						path='courses/add'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path='courses/update/:courseId'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					{/* <Route path='courses/add' element={<CreateCourse />} /> */}
				</Route>
				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</>
	);
}
