import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
 
const Header = () => {
    return(
        <div className="header-container">
            <div className="header-flex">          
                <Link to="/"><h1 className="top-header">FREE LA</h1></Link>
                <img className="header-img" src="https://i.imgur.com/NzTsljw.png" alt="palmtree"></img>
            </div>
        </div>
    )
}

export default Header