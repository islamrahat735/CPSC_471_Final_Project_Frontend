export const saveUsername = (username) => {
    return (dispatch) => {
        dispatch({
            type: "username/save",
            payload: username
        });
    }
}