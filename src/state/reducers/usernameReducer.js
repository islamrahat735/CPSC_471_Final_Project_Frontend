const initialState = "none";

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "username/save":
            console.log(state);
            return action.payload;
        default:
            return state
    }
}

export default reducer;