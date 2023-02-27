import styles from './CreateCourse.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem';
import { formatTime } from '../../constants/contants';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

// import IAuthorInfo from 'src/interfaces/i-authorInfo';
export default function CreateCourse({ addCourse }) {
	const navigate = useNavigate();
	const [durationValue, setDurationValue] = React.useState<string>('00:00');
	const [authorName, setAuthorName] = React.useState<string>('');

	const [titleValue, setTitleValue] = React.useState<string>('');
	const [descriptionValue, setDescriptionValue] = React.useState<string>('');

	const [addedAuthorList, addAuthorToList] = React.useState<any>([]);
	const [selectedAuthors, addSelectedAuthor] = React.useState<any>([]);

	const addAuthor = () => {
		const authorInfo = [
			{
				id: uuidv4(),
				name: authorName,
			},
		];
		addAuthorToList([...addedAuthorList, ...authorInfo]);
		setAuthorName('');
	};
	const deleteAuthor = (selectedAuthor) => {
		const authorId = selectedAuthor[0].id;
		const updatedList = selectedAuthors.filter(
			(selectedAuthor) => selectedAuthor.id !== authorId
		);
		addSelectedAuthor(updatedList);
	};
	const selectAuthor = (selectedAuthor) => {
		addSelectedAuthor([...selectedAuthors, ...selectedAuthor]);
	};
	const addTitle = (event) => {
		setTitleValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			titleValue &&
			descriptionValue &&
			durationValue &&
			selectedAuthors.length
		) {
			const [hours, minutes] = durationValue.split(':');
			const durationInMins = Number(hours) * 60 + Number(minutes);
			const courseDetail = [
				{
					id: uuidv4(),
					title: titleValue,
					description: descriptionValue,
					creationDate: `${new Date().getDate()}/${
						new Date().getMonth() + 1
					}/${new Date().getFullYear()}`,
					duration: durationInMins,
					authors: selectedAuthors.map((author) => author.id),
				},
			];
			addCourse(courseDetail, selectedAuthors);
			navigate('/courses');
		} else {
			alert('All fields are mandatory');
		}
	};
	return (
		<div className={styles.createCourse}>
			<div>
				<form onSubmit={handleSubmit}>
					<div className={styles.createCourseRow1}>
						<Input
							onChange={addTitle}
							placeholder={'Enter title...'}
							label={'Title'}
						/>
						<Button label={'Create course'} />
					</div>
					<div className={styles.createCourseRow2}>
						<label>Description</label>
						<textarea
							onChange={(event) => setDescriptionValue(event.target.value)}
							placeholder='Enter description'
						></textarea>
					</div>
				</form>
				<div className={styles.createCourseRow3}>
					<div className={styles.addAuthorWrapper}>
						<label>
							<strong>Add authors</strong>
						</label>
						<div className={styles.addAuthor}>
							<Input
								value={authorName}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
									setAuthorName(event.target.value)
								}
								label={'Author name'}
								placeholder={'Enter author name...'}
							/>
							<Button
								disabled={authorName.length < 2}
								onClick={addAuthor}
								label={'Create author'}
							/>
						</div>
						<div className={styles.duration}>
							{/* <div>
								<label>
									<strong>Duration</strong>
								</label>
							</div> */}
							<Input
								onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
									setDurationValue(formatTime(event.target.value))
								}
								type={'number'}
								min={0}
								placeholder={'Enter duration in minutes...'}
								label={'Duration'}
							/>
							<div>
								<label>
									Duration: <strong>{durationValue}</strong> hours
								</label>
							</div>
						</div>
					</div>
					<div className={styles.authorListWrapper}>
						<label>
							<strong>Authors</strong>
						</label>
						<div>
							{addedAuthorList.length ? (
								addedAuthorList.map((author, index) => (
									<AuthorItem
										key={index}
										clickAction={selectAuthor}
										author={author}
										type={'Add author'}
									/>
								))
							) : (
								<label>Author list is empty</label>
							)}
						</div>
						<label>
							<strong>Course Authors</strong>
						</label>
						<div>
							{selectedAuthors.length ? (
								selectedAuthors.map((author, index) => (
									<AuthorItem
										key={index}
										clickAction={deleteAuthor}
										author={author}
										type={'Delete author'}
									/>
								))
							) : (
								<label>Author list is empty</label>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
