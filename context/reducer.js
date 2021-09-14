import initialState from './initialState';
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CAMERA_IMAGE":
            state.cameraImage = action.payload
            return state
        case "RESET_CAMERA_IMAGE":
            state.cameraImage = null
            return state
        case "SELECT_IMAGE":
            state.selectedImage = action.payload
            return state
        case "RESET_IMAGE":
            state.selectedImage = null
            return state
        case "LOGIN":
            state.user = action.payload;
            return state;
        case "LOGOUT":
            state.user = null;
            return state
        default:
            return state
    }
}
export default reducer;