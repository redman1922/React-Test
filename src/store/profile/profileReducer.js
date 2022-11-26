import { CHANGE_NAME } from "./chatActions";

const initionalSate = {
    showName: true,
    name: 'Denis'
};

const profileReducer = (state = initionalSate, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.playload
            }
        default:
            return state
    }
}

export default profileReducer