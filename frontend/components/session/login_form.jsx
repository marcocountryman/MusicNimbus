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

    componentWillUnmount() {
        this.props.removeErrors();
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
            password: "hunter12"
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
            <ul className = "session-errors">
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`} 
                    className='errors-item'>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className = "session-form-container">
                
                <button onClick = {this.handleDemoUser} className='demo-butn'>
                    Free Guest Pass
                </button>
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    
                

                <form onSubmit = {this.handleSubmit} className = "session-form-login">

                        
                        <input type="text" 
                        value = {this.state.email} 
                        onChange = {this.update("email")}
                        placeholder='Your Email'
                        className='session-form-input' 
                        />
                                    
                        <input type="password" 
                        value = {this.state.password} 
                        onChange = {this.update("password")}
                        placeholder='Your password'
                        className='session-form-input'  
                        />
                       
                        {this.errorMessages()}

                        <input type="submit" 
                        value = "Ready to Jiggy"
                        className='session-butn'  
                        />
                    
                </form>
                            
                {/* <button onClick={() => this.props.openModal()}>Create Account Instead</button> */}
            </div>
        )
    }
}

export default LoginForm;