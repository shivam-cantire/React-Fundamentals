const authToken = localStorage.getItem('auth-token');
export const fetchAllCourses = async () => {
	return await fetch(`http://localhost:4000/courses/all`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const fetchAuthors = async () => {
	return await fetch(`http://localhost:4000/authors/all`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

const sendPostReq = async (data, path: string) => {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: authToken,
	};
	if (path.includes('register') || path.includes('login')) {
		delete headers.Authorization;
	}
	return await fetch(`http://localhost:4000/${path}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: headers,
	});
};

const sendGetReq = async (path: string) => {
	return await fetch(`http://localhost:4000/${path}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken,
		},
	});
};

const logout = async () => {
	return await fetch(`http://localhost:4000/logout`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken,
		},
	});
};

const deleteCourse = async (courseId) => {
	return await fetch(`http://localhost:4000/courses/${courseId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken,
		},
	});
};

const sendDeleteReq = async (deletePath: string) => {
	return await fetch(`http://localhost:4000/${deletePath}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken,
		},
	});
};

const sendPutReq = async (data, updatePath: string) => {
	return await fetch(`http://localhost:4000/${updatePath}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Authorization: authToken,
		},
	});
};

const api = {
	fetchAllCourses,
	fetchAuthors,
	sendPostReq,
	logout,
	sendGetReq,
	deleteCourse,
	sendDeleteReq,
	sendPutReq,
};
export default api;
