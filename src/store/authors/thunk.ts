import { Dispatch } from 'redux';
import api from 'src/services';
import {
	saveAuthorsAction,
	errorAction,
	addNewAuthorAction,
	deleteAuthorAction,
} from './actions';

export const getAuthors = () => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.fetchAuthors();
			if (response.status === 200) {
				response.json().then((data) => {
					dispatch(saveAuthorsAction(data.result));
				});
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};

export const addNewAuthor = (authorName: string) => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.sendPostReq(
				{ name: authorName },
				'authors/add'
			);
			if (response.status === 201) {
				response.json().then((data) => {
					dispatch(addNewAuthorAction(data.result));
				});
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};

export const deleteAuthor = (authorId: string) => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.sendDeleteReq(`authors/${authorId}`);
			if (response.status === 200) {
				dispatch(deleteAuthorAction(authorId));
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};
