//shows the error message
export const getError = (error) => {
    return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
}