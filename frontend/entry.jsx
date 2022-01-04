import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './action/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    let store;
    if (window.currentUser) {
        debugger
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

    ReactDOM.render(<Root store = {store}/>, rootElement );
})