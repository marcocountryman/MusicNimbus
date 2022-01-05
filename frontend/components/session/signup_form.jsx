import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            displayname: "",
            age: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(this.props.closeModal);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const user = {
            email: "hunter12@hotmail.com",
            password: "password"
        }
        this.props.login(user).then(this.props.closeModal);
    }

    update(field) {

        return (e) => {
            this.setState({ [field] : e.currentTarget.value})
        }
    }

    updateAge(age) {
       
        return (e) => {
            const newAge = Number(e.currentTarget.value)
            this.setState({
                age: newAge
            })
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
                <h2>Create Account</h2>
                <button onClick = {this.handleDemoUser}>Demo User</button>
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
                        <label> Display Name:
                            <br/><input type="text" value = {this.state.displayname} onChange = {this.update("displayname")} />
                        </label>
                        <br/>
                        <label> Age:
                            <br/><input type="number" value = {this.state.age} onChange = {this.updateAge("age")} />
                        </label>
                        <br/>
                        <input type="submit" value = "Create Account" />


                    </div>
                </form>
                <button onClick={() => this.props.openModal()}>Sign In Instead</button>
            </div>
        )
    }
}

export default SignupForm;