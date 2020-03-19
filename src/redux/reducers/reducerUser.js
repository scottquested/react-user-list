import initialState from "../data";
import {
    ADD_USER, REMOVE_USER
} from "../actions";

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.user
            ];
        case REMOVE_USER:
            return state.filter((item, index) => action.user !== index);
        default:
            return state;
    }
};

export default userReducer;