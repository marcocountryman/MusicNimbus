import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
    modals: modalReducer    
});

export default uiReducer;