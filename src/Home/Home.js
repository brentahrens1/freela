import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import './Home.css'
import TwitterFeedHome from '../TwitterFeedHome/TwitterFeedHome'
import TwitterFeedHome2 from '../TwitterFeedHome2/TwitterFeedHome2'
import TwitterFeedHome3 from '../TwitterFeedHome3/TwitterFeedHome3'


class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="home-container">
          <img className="main-splash-img" src="https://i.imgur.com/8FCbeHo.jpg" alt="home"/>
        <div className="mid-image-flex">
          <img className="splash-header2" src="https://images.unsplash.com/photo-1542622713-52cecfdf7f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="home"/>
          <img className="splash-header2" src="https://images.unsplash.com/photo-1540230110864-02a79646ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="home"/>
          <img className="splash-header2" src="https://images.unsplash.com/photo-1524549028671-c64980386279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="home"/>
          <img className="splash-header2" src="https://images.unsplash.com/photo-1538647021323-abb94a853862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="home"/>
        </div>
        <div className="featured-container">
          <h1 className="home-header">Featured Events</h1> 
          <div className="featured-flex">
            <div className="cards__item">
              <div className="card">
                <img className="card__image card__image--fence" alt="eventimg" src="https://static1.squarespace.com/static/5177ee48e4b054c7ac38cf8b/t/59f099d1f9a61ec0915c05eb/1508940515390/Philip+Portrait04+%282%29+%281%29+%281%29.jpg"/>
              <div className="card__content">
              <div className="card__title">PHILIP COLBERT: HUNT PAINTINGS</div>
              <p className="card__text">On view through March 11th, famed Saatchi Gallery London has a their first pop-up
              gallery in LA through March 11th, taking over the former Taschen Gallery space on Beverly, where they are 
              showing British artist Philip Colbert’s Hunt Paintings, presented by Unit London.</p>
              <h3 className="card__text">TUE MAR 5 11:00AM - MON MAR 11 6:00PM</h3>
              </div>
            </div>
            </div>
            <div className="cards__item">
              <div className="card">
                <img className="card__image card__image--fence" alt="eventimg" src="https://res-3.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1537404178/event-poster-9912187.jpg"/>
              <div className="card__content">
              <div className="card__title">¡LUNCHTIME! YOGA RETREAT</div>
              <div className="card__title">EVERY WED 12:15PM - 1:00PM </div>
              <p className="card__text">Grand Park's popular yoga sessions return, giving participants the opportunity to relax, 
              rejuvenate and re-energize.</p>
              <h3 className="card__text">Grand Park</h3>
              </div>
            </div>
            </div>
            <div className="cards__item">
              <div className="card">
                <img className="card__image card__image--fence" alt="eventimg" src="https://images1.laweekly.com/imager/u/745xauto/8916132/root-down-at-short-stop-2005.jpg"/>
              <div className="card__content">
              <div className="card__title">BACK IN THE DAY WEDNESDAYS WITH DJ MOIST</div>
              <div className="card__title">EVERY 3RD WEDNESDAY OF THE MONTH</div>
              <p className="card__text">"When Dj Moist spins it's a never ending mix of audible sexiness. Moist conducts an electronic 
              symphony of insatiable rhythms and get to know you better dance music by old school legends Aaliyah, Bobby Brown, Boyz II Men,
              D'angelo, En Vogue and just about everything 90's, HipHop, and R&B" DTLA WEEKLY</p>
              <h3 className="card__text">1455 W Sunset BLVD Echo Park</h3>
              </div>
            </div>
            </div>
            </div> 
            <div className="home-twitter-top">
              <div className="home-twitter-align">
              <div className="twit-flex">
                <h1 className="home-header">Discover LA</h1>
                  <TwitterFeedHome/>
              </div>
              <div className="twit-flex">
                <h1 className="home-header">the LA Scene</h1>
                <TwitterFeedHome2/>
              </div>
              <div className="twit-flex">
                <h1 className="home-header">LA Public Library</h1>
                <TwitterFeedHome3/>
              </div>
            </div>
            </div>
        </div>
      </div>      
    )
  }
}

export default  withRouter(Home)
