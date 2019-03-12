import React, { Component } from 'react'
import './Art.css'
import EventCard from '../EventCard/EventCard'
import { doGetArtEvents } from '../Firebase/Events'
import TwitterFeedArt from '../TwitterFeedArt/TwitterFeedArt'

class Art extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        doGetArtEvents()
        .then(events => this.setState({events}))
    }

    render () {return(
        <div className="art-container">
            <div className="art-banner-flex">
                <img className="art-image" src="https://images.unsplash.com/photo-1447758902204-48010b87c24d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="art"/>
                <div className="art-desc-flex">
                    <TwitterFeedArt/>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Express yourself</h1>
            <hr/>
            <div className="art-flex">
                {
                    this.state.events.map(e => 
                        <EventCard event={e} currentUser={this.props.currentUser}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Art






