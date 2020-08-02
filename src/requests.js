
export const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    })
        .then(response => {
            if (response.status >= 400) {
                //Return promise that returns an error - equal behaviour with error and data
                //TODO: specific response for each error
                return response.json().then(errorRespData => {
                    const error = new Error('Something went wrong');
                    error.data = errorRespData;
                    throw error;
                })
            }
            return response.json();
        });
}

