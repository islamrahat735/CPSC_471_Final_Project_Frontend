export const saveChildID = (childID) => {
    return (dispatch) => {
        dispatch({
            type: "childID/save",
            payload: childID
        });
    }
}