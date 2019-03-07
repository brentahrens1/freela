import React, {Component} from 'react'
import { auth } from '../Firebase/Firebase'
import { doAddUser } from '../Firebase/Users'
import { withRouter } from 'react-router-dom'
import './Register.css'


class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        loading: false 
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        auth
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                doAddUser(createdUser.user.uid, { 
                    username: this.state.username, 
                    email: this.state.email 
                })
                return this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err)

            })

    }

    render() {
        return(
            <div className="register-container">
                <form className="register-flex" onSubmit={this.handleSubmit}>
                    <input className="input1"
                            type='text' 
                            name='username'
                            placeholder='username'
                            onChange={this.handleChange}
                    />
                    <input className="input2"
                            type='email' 
                            name='email'
                            placeholder='email'
                            onChange={this.handleChange}
                    />
                    <input className="input3"
                            type='password' 
                            name='password'
                            placeholder='password'
                            onChange={this.handleChange}
                    />

                    <button className="register-btn">Register</button>

                </form>
            </div>
        )
    }
}


export default withRouter(Register)

