import React, {Component} from 'react'
import { auth } from '../Firebase/Firebase'
import { doGetUser } from '../Firebase/Users';
import { withRouter } from 'react-router-dom'
import './Login.css'


class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: [],
        loading: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
            console.log(signedInUser)
            doGetUser(signedInUser.user.uid)
                .then(snapShot => {

                    this.props.doSetCurrentUser(snapShot.data())
                    return this.props.history.push('/')
                })
        }) 
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div className="login-container">
                <form className="login-flex" onSubmit={this.handleSubmit}>
                <h1 className="login-header">Log in</h1>
                    <input className="input1"
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={this.handleChange}
                    />
                    <input  className="input2"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <button className="login-btn">Login</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Login)