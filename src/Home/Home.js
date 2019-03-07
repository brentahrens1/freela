import React, { Component } from "react"
import { Link } from 'react-router-dom'
import './Home.css'
import Button from '../Button/Button'
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="home-image" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/U4GOIU-/sunset-famous-los-angeles-venice-beach-skate-park-panorama-4k-time-lapse-usa_hpbsevs8__F0000.png" alt="beach"></img>
        <div className="home-banner">get out and do something</div>
        {/* <Link to="/newevent"><button className="home-btn">Post Event</button></Link> */}
        {/* <button onClick={() => this.props.doLogOut()}>Sign Out</button> */}
        {/* <meter min="0" max="100" optimum="100" low="40" high="70" value="50"></meter> */}
      </div>
    )
  }
}

export default Home;
