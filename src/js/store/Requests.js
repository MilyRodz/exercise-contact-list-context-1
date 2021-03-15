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
	const requestOptions = {
		method: method,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	};
	return requestOptions;
};
