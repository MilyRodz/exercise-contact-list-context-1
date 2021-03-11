export const getRequest = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	}
};

export const postRequest = {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	}
};

export const putRequest = {
	method: "PUT",
	headers: {
		"Content-Type": "application/json"
	}
};

export const deleteRequest = {
	method: "PUT",
	headers: {
		"Content-Type": "application/json"
	}
};

export const requestConfig = (method, body) => {
	const config = {
		method,
		headers: {
			"Content-Type": "application/json"
		},
		body
	};
	return config;
};
