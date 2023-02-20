import styles from '../../Courses.module.css';
import { formatTime } from '../../../../constants/contants';
import Button from '../../../../common/Button/Button';

export default function CourseCard(Props) {
	const courseDetail = Props.courseDetail;
	const authorList = Props.authors;
	const authors = courseDetail.authors.map(
		(author) => authorList.find((authorList) => authorList.id === author).name
	);

	const formatDate = (date) => {
		return date.split('/').join('.');
		// return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
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
						<span>{authors.join(', ')}</span>
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
					<Button style={styles.showCourseBtn} label={'Show course'} />
				</div>
			</div>
		</div>
	);
}
