import React from 'react';
import styles from '../../Courses.module.scss';
import { formatTime, formatDate } from 'src/constants/contants';
import Button from 'src/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import ICourseCard from 'src/interfaces/i-courseCard';
import IAuthorId from 'src/interfaces/i-authorId';
export default function CourseCard({ courseDetail, authors }: ICourseCard) {
	const navigate = useNavigate();
	const authorsName = courseDetail.authors.map(
		(author: Array<IAuthorId>) =>
			authors.find((authorList) => authorList.id === author).name
	);
	const handleShowCourse = () => {
		navigate(`/course-info/${courseDetail.id}`);
	};

	return (
		<div className={styles.courseCard}>
			<div className={styles.courseDetail}>
				<span>
					<strong>{courseDetail.title}</strong>
				</span>
				<span>{courseDetail.description}</span>
			</div>
			<div>
				<div className={styles.courseMeta}>
					<div className={styles.courseBox}>
						<span>Authors:</span>
						<span>{authorsName.join(', ')}</span>
					</div>
					<div className={styles.courseBox}>
						<span>
							<strong>Duration:</strong>
						</span>
						<span>{formatTime(courseDetail.duration)} hours</span>
					</div>
					<div className={styles.courseBox}>
						<span>
							<strong>Created:</strong>
						</span>
						<span>{formatDate(courseDetail.creationDate)}</span>
					</div>
					<Button
						onClick={handleShowCourse}
						style={styles.showCourseBtn}
						label={'Show course'}
					/>
				</div>
			</div>
		</div>
	);
}
