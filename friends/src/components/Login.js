import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import Button from "@material-ui/core/Button";
import 'fontsource-roboto';
import "./component.css"

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }   
        };
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading: true});
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
                window.localStorage.setItem('token', res.data.payload)
                this.setState({...this.state, isLoading: false });
                this.props.history.push('/friendlist');
            })
            .catch(err => {
                console.log(err)
            });
        };
        
    render() {
        return (
            <div className="Container">
                <form onSubmit={this.handleSubmit}>
                <div className="Username">
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                </div>
                <div className="Password">
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                </div>
                <div>
                <Button type="submit" variant="contained" color="primary">
                    LOGIN
                </Button>
                </div>
                </form>
            </div>
        );
    }
}

export default Login;