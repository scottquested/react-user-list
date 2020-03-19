import userReducer from "./reducerUser";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    userReducer: userReducer
});

export default allReducers;
