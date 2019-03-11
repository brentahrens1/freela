import React, { Component} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component{
    render() {
    return(
        <div className="navbar-container">
            <ul className="nav-list">
                <nav className="list-item">
                    <img className="navbar-logo" src="https://i.imgur.com/9O8Eq4X.png" alt="nav"/>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/nature">Nature</Link></li>
                    <li><Link to="/exercise">Exercise</Link></li>
                    <li><Link to="/art">Art</Link></li>
                </nav>                             
            </ul>
        </div>

        
        )
    }
}


export default NavBar

