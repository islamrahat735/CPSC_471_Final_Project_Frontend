export const saveTeacherID = (teacherID) => {
    return (dispatch) => {
        dispatch({
            type: "teacherID/save",
            payload: teacherID
        });
    }
}