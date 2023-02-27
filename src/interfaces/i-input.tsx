import { ChangeEventHandler } from 'react';

export default interface IInput {
	label?: string;
	value?: string;
	onChange?: ChangeEventHandler;
	style?: string;
	placeholder?: string;
	type?: string;
	min?: number;
}
