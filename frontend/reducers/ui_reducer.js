import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import songPlayReducer from "./song_play_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    songPlayer: songPlayReducer    
});

export default uiReducer;