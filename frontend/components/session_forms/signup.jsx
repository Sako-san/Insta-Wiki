import React from 'react';
import {merge} from 'lodash'
import { Link } from 'react-router-dom';

class SignupSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
                email: '',
                name: '',
                username: '',
                password: '',
        };
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errs.map((err, idx) =>
                    <li key={`err-${idx}`}>
                        {err}
                    </li>
                )};
            </ul>
        );
    };

    render() {
        return (
            <div>
                <h1 className="insta-logo">Instasham
                </h1>
                <h4 className="sign-up-blurb">Sign up to see photos from your friends.
                </h4>
                {/* <h4>{this.props.formType}</h4> */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="signup-email"
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Full Name"
                            className="signup-name"
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                            className="signup-username"
                        />
                    </label>
                    <br/>
                    <label >
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="signup-pw"
                        />
                    </label>
                    <br/>
                    <input type="submit" value={this.props.formType} />
                </form>

                <div>
                    Have an account? {this.props.navLink}
                </div>
            </div>
        );
    };

};

export default SignupSessionForm;