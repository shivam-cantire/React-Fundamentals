import styles from '../Common.module.css';
import React from 'react';
export default function Input(Props) {
	return (
		<div className={styles.inputComponent}>
			{Props.label && <label>{Props.label}</label>}
			<input
				value={Props.value}
				onChange={Props.onChange}
				className={Props.style}
				placeholder={Props.placeholder}
				type={Props.type ?? 'text'}
				min={Props.min}
			/>
		</div>
	);
}
