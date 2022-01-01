import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './action/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    ReactDOM.render(<Root store = {store}/>, rootElement );
})