import styles from '../Common.module.css';
import InputI from 'src/interfaces/i-input';
import React from 'react';

export default function Input({
	label,
	value,
	onChange,
	style,
	placeholder,
	type,
	min,
}: InputI) {
	return (
		<div className={styles.inputComponent}>
			{label && <label>{label}</label>}
			<input
				value={value}
				onChange={onChange}
				className={style}
				placeholder={placeholder}
				type={type ?? 'text'}
				min={min}
			/>
		</div>
	);
}
