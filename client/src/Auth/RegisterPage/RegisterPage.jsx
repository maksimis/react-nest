import React from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                phoneNumber: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.firstName && user.lastName && this.validateEmail(user.email) && this.validatePassword(user.password) && this.validateAge(user.age) && this.validatePhoneNumber(user.phoneNumber)) {
            this.props.register(user);
        }
    }

    validateAge(age){
        return (!age || isNaN(Number(age)))
    }

    validatePhoneNumber(phoneNumber) {
        (!phoneNumber || this.phoneReg.test(phoneNumber));
    }

    validatePassword(password){
        return (!password || password.length<6);
    }

    validateEmail(email){
        return (!email || this.emailReg.test(email));
    }

    emailReg = /^.+@.+\..+$/;
    phoneReg =/^[0-9\-\+]{9,15}$/

    render() {
        const {registering, alert} = this.props;
        const {user, submitted} = this.state;
        return (
            <div className="jumbotron h-100">
                <div className="container h-75 d-flex align-items-center justify-content-center">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert && alert.message &&
                        <div className={`alert alert-${alert.type}`}>{alert.message}</div>
                        }
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Register</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                    {submitted && !user.firstName &&
                                    <div className="help-block">First Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                    {submitted && !user.lastName &&
                                    <div className="help-block">Last Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.age ? ' has-error' : '')}>
                                    <label htmlFor="username">Age</label>
                                    <input type="text" className="form-control" name="age" value={user.age} onChange={this.handleChange} />
                                    {submitted && !this.validateAge(user.age) &&
                                    <div className="help-block">Invalid age</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                                    {submitted && !this.validateEmail(user.email) &&
                                    <div className="help-block">Invalid Email</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.phoneNumber ? ' has-error' : '')}>
                                    <label htmlFor="username">Phone number</label>
                                    <input type="text" className="form-control" name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange} />
                                    {submitted && !this.validatePhoneNumber(user.phoneNumber) &&
                                    <div className="help-block">Invalid phone number</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                    {submitted && !this.validatePassword(this.validatePassword()) &&
                                    <div className="help-block">Invalid password</div>
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <button className="btn btn-primary">Register</button>
                                    {registering &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="  alt=''/>
                                    }
                                    <Link to="/login" className="btn btn-link">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export {RegisterPage };