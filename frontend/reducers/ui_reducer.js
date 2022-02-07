import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import songPlayReducer from "./song_play_reducer";
import modalIdReducer from "./modal_id_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    modalId: modalIdReducer,
    songPlayer: songPlayReducer    
});

export default uiReducer;