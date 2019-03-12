import React, { Component } from 'react'
import './Music.css'
import EventCard from '../EventCard/EventCard'
import { doGetMusicEvents } from '../Firebase/Events'
import TwitterFeedMusic from '../TwitterFeedMusic/TwitterFeedMusic'

class Music extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        doGetMusicEvents().then(events => this.setState({events}))
    }


    render () {return(
        <div className="music-container">
            <div className="music-banner-flex">
                <img className="music-image" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="music"/>
                <div className="music-desc-flex">
                        <TwitterFeedMusic/>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Upcoming Events</h1>
            <hr/>
            <div className="music-flex">
                {
                    this.state.events.map(e => 
                        <EventCard event={e} currentUser={this.props.currentUser} />
                    )
                }
            </div>
        </div>
    )}
}

export default Music 