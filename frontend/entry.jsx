import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//IMPORTS FOR TESTING. REMOVE PRIOR TO PUSH TO PRODUCTION.
import { signup, 
    login, 
    logout} from './action/session_actions';

import { fetchAllSongs, 
    fetchSong, 
    createSong, 
    updateSong, 
    deleteSong} from './action/song_actions';


document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id] : window.currentUser}
            },
            session: { id: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    //THIS IS HERE FOR TESTING PURPOSES
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    window.fetchAllSongs = fetchAllSongs;
    window.fetchSong = fetchSong;
    window.createSong = createSong;
    window.updateSong = updateSong;
    window.deleteSong = deleteSong;







    ReactDOM.render(<Root store = {store}/>, rootElement );
})