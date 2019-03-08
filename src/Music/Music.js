import React, { Component } from 'react'
import './Music.css'
import EventCard from '../EventCard/EventCard'
import { doGetMusicEvents } from '../Firebase/Events'

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
                <img className="music-image" src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/01/Copy-of-LaurenRuthWard_TheEcho_010818-2.jpg" alt="music"/>
                <div className="desc-flex">
                    <h1 className="music-header">Live Music</h1>
                    <p className="desc-music">No matter your genre preference, LA's got an active music scene for your taste -- and probably 
                        has a totally free ongoing night that'll please you, aurally. Here are LA's best free ongoing 
                        music nights,  we'd love to hear anything else we missed in the comments -- Please feel free to register 
                        and post any upcoming live shows coming up.</p>
                    <h1 className="music-header">Live Feed</h1>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Upcoming Events</h1>
            <hr/>
            <div className="music-flex">
                {
                    this.state.events.map(e => 
                        <EventCard event={e} currentUser={this.props.currentUser}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Music 