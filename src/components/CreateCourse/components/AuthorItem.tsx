import Button from '../../../common/Button/Button';
import styles from '../CreateCourse.module.scss';
import React from 'react';
export default function AuthorItem(Props) {
	const author = Props.author;
	// const [disabled, setDisabled] = React.useState(false);
	return (
		<div className={styles.authorItem}>
			<label>{author.name}</label>
			<Button
				onClick={() => {
					Props.clickAction([author]);
				}}
				label={Props.type}
			/>
		</div>
	);
}
