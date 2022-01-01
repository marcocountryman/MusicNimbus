import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    ReactDOM.render(<h1>React Is Working</h1>, rootElement );
})