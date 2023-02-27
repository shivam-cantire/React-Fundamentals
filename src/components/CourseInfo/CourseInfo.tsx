import styles from './CourseInfo.module.scss';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	mockedAuthorsList,
	mockedCoursesList,
	formatTime,
	formatDate,
} from 'src/constants/contants';
import ICourseInfo from 'src/interfaces/i-courseInfo';

export default function CoursesInfo() {
	const params = useParams();
	const [authorsName, setAuthorsName] = React.useState<Array<string>>([]);
	const [courseInfo, setCourseInfo] = React.useState<ICourseInfo>();
	React.useEffect(() => {
		window.scrollTo(0, 0);
		const courseDetail = mockedCoursesList.filter(
			(courseList) => courseList.id == params.courseId
		)[0];
		setCourseInfo(courseDetail);
		const authors = courseDetail.authors.map(
			(author) =>
				mockedAuthorsList.find((authorList) => authorList.id === author).name
		);
		setAuthorsName(authors);
	}, []);
	return (
		<div className={styles.coursesInfoContainer}>
			<div className={styles.courseBack}>
				<span>
					<Link to='/courses'>Back to Courses</Link>
				</span>
			</div>
			<div className={styles.courseLabel}>
				<span>
					<strong>{courseInfo && courseInfo.title}</strong>
				</span>
			</div>
			<div className={styles.courseDetails}>
				<div className={styles.courseInfo}>
					<span>{courseInfo && courseInfo.description}</span>
				</div>
				<div>
					<div className={styles.courseMeta}>
						<div className={styles.courseBox}>
							<span>ID</span>
							<span>{courseInfo && courseInfo.id}</span>
						</div>
						<div className={styles.courseBox}>
							<span>
								<strong>Duration:</strong>
							</span>
							<span>{courseInfo && formatTime(courseInfo.duration)}</span>
						</div>
						<div className={styles.courseBox}>
							<span>
								<strong>Created:</strong>
							</span>
							<span>{courseInfo && formatDate(courseInfo.creationDate)}</span>
						</div>
						<div className={styles.courseBox}>
							<span>Authors:</span>
							<span>{authorsName && authorsName.join(', ')}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
