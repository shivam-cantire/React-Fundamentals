import { Dispatch } from 'redux';
import api from 'src/services';
import {
	saveCoursesAction,
	addNewCourseAction,
	deleteCourseAction,
	updateCourseAction,
	errorAction,
} from './actions';

export const getAllCourses = () => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.fetchAllCourses();
			if (response.status === 200) {
				response.json().then((data) => {
					dispatch(saveCoursesAction(data.result));
				});
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};

export const addNewCourse = (payload) => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.sendPostReq(payload, 'courses/add');
			if (response.status === 201) {
				response.json().then((data) => {
					dispatch(addNewCourseAction(data.result));
				});
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};
export const deleteCourse = (courseId) => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.sendDeleteReq(`courses/${courseId}`);
			if (response.status === 200) {
				dispatch(deleteCourseAction(courseId));
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};

export const updateCourse = (payload, courseId) => {
	return async function (dispatch: Dispatch) {
		try {
			const response = await api.sendPutReq(payload, `courses/${courseId}`);
			if (response.status === 200) {
				response.json().then((data) => {
					dispatch(updateCourseAction(data.result, courseId));
				});
			}
		} catch (error) {
			dispatch(errorAction(JSON.stringify(error)));
		}
	};
};
