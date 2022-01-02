import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor() {
        super(props)
        this.state = {
            email: "",
            password: "",
            displayname: "",
            age: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {

        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }

    errorMessages() {

        return (
            <ul>
                {this.props.errors.map((error, idx) => {
                    return <li key = {`error-${idx}`}>
                        {error}
                    </li>
                })}
            </ul>
        )
    }

    render() {
        debugger
        return (
            <div>
                {this.props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Log In</h2>}
            </div>
        )
    }
};

export default SessionForm;
