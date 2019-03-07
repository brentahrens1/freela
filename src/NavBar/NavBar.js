import React, { Component} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component{
    render() {
    return(
        <div className="navbar-container">
            <ul className="nav-list">
                {
                    this.props.currentUser.username
                        ?(
                            <nav className="list-item">
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/nature">Nature</Link></li>
                                <li><Link to="/exercise">Exercise</Link></li>
                                <li><Link to="/art">Art</Link></li>
                                <li><Link to="/newevent">Post Event</Link></li>
                                <li onClick={() => this.props.doLogOut()}><Link to="/">Log out</Link></li>  
                            </nav>                             
                        )
                        :
                        (
                            <nav className="list-item">
                                <li><Link to="/music">Music</Link></li>
                                <li><Link to="/nature">Nature</Link></li>
                                <li><Link to="/exercise">Exercise</Link></li>
                                <li><Link to="art">Art</Link></li>
                                <li><Link to='/login'>Log in</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </nav>
                        )
                }
            </ul>
        </div>
        )
    }
}


export default NavBar

