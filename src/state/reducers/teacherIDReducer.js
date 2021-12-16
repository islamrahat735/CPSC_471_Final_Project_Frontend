const initialState = -1;

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "teacherID/save":
            return action.payload;
        default:
            return state
    }
}

export default reducer;