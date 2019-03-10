import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import './Home.css'
class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="home-container">
      <img className="splash-header2" src="https://images.unsplash.com/photo-1542622713-52cecfdf7f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      <img className="splash-header2" src="https://images.unsplash.com/photo-1540230110864-02a79646ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      <img className="splash-header2" src="https://images.unsplash.com/photo-1524549028671-c64980386279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      <img className="splash-header2" src="https://images.unsplash.com/photo-1538647021323-abb94a853862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      <h1 className="home-header">Featured Events</h1>  
        <div className="container">
          <div className="all">
            <div className="front"><img src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/bronson-batmancave-hollywood-sign-hiking.jpg?auto=compress&cs=tinysrgb&h=650&w=900" alt="home"/></div>
            <div className="back"><img src="https://fitt.co/los-angeles/wp-content/uploads/sites/33/2018/03/Platefit-e1543870709285-1600x1173.jpg?auto=compress&cs=tinysrgb&h=650&w=900" alt="home"/></div>
            <div className="left"><img src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-02/10in%2Bby%2B8in%2B-%2BOZUNA.jpg?auto=compress&cs=tinysrgb&h=650&w=900" alt="home"/></div>
            <div className="right"><img src="https://media.timeout.com/images/101556779/630/472/image.jpg?auto=compress&cs=tinysrgb&h=650&w=900" alt="home"/></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>   
      </div>      
    )
  }
}

export default  withRouter(Home)
