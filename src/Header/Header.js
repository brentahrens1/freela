import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
 
class Header extends Component {
    render() {
    return(
        <div className="header-container">
            <ul>
                {
                    this.props.currentUser.username
                    ?(
                        <nav className="header-navflex">
                            <li className="item1"><Link to="/newevent">Post Event</Link></li>
                            <li className="item2" onClick={() => this.props.doLogOut()}><Link to="/">Log out</Link></li>  
                        </nav>
                    )
                    :
                    (
                        <nav className="header-navflex">
                            <li className="item1"><Link to='/login'>Log in</Link></li>
                            <li className="item2"><Link to='/register'>Register</Link></li>
                        </nav>

                    )
                } 
            </ul>
            <div className="header-flex">          
                <Link to="/"><h1 className="top-header">FREE LA</h1></Link>
                <img className="header-img" src="https://i.imgur.com/NzTsljw.png" alt="palmtree"></img>
            </div>
        </div>
        )
    }
}

export default Header