import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        const user = Object.assign({}, this.state);
        this.props.login(user).then(this.props.closeModal);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const user = {
            email: "hunter12@hotmail.com",
            password: "password"
        };
        this.props.login(user).then(this.props.closeModal);
    }

    update(field) {

        return (e) => {
            this.setState({ [field] : e.currentTarget.value})
        }
    }

    errorMessages() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleDemoUser}>Demo User</button>
                <h2>Sign In</h2>
                
                
                <form onSubmit = {this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-x">X</div>

                    {this.errorMessages()}
                    <div className = "signup-form"> 
                        <label> Email:
                            <br/><input type="text" value = {this.state.email} onChange = {this.update("email")} />
                        </label>
                        <br/>
                        <label> Password:
                            <br/><input type="password" value = {this.state.password} onChange = {this.update("password")} />
                        </label>
                        <br/>
                        <input type="submit" value = "Sign In" />
                    </div>   
                </form>
                
                
                
                <button onClick={() => this.props.openModal()}>Create Account Instead</button>
            </div>
        )
    }
}

export default LoginForm;