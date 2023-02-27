export const saveUser = async (data, path) => {
	return await fetch(`http://localhost:4000/${path}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const getUser = async (path, headers) => {
	return await fetch(`http://localhost:4000/${path}`, {
		method: 'GET',
		headers: headers,
	});
};
