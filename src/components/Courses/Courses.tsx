import styles from './Courses.module.scss';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IReducers from 'src/interfaces/i-reducers';
import IAuthorInfo from 'src/interfaces/i-authorInfo';
import { getAllCourses } from 'src/store/courses/thunk';
import { getAuthors } from 'src/store/authors/thunk';
import ICourseResponse from 'src/interfaces/i-courseResponse';

export default function Courses() {
	const dispatch = useDispatch<any>();
	const courses = useSelector(
		(state: IReducers): ICourseResponse => state.courses
	);

	const authors = useSelector(
		(state: IReducers): IAuthorInfo[] => state.authors
	);

	React.useEffect(() => {
		if (!courses?.data?.length && !authors?.length) fetchCoursesAndAuthors();
	}, []);
	const fetchCoursesAndAuthors = async () => {
		dispatch(getAllCourses());
		dispatch(getAuthors());
	};
	return (
		<div className={styles.coursesContainer}>
			<div>
				<SearchBar />
				{courses?.data?.map((course, index) => (
					<CourseCard key={index} authors={authors} courseDetail={course} />
				))}
			</div>
		</div>
	);
}
