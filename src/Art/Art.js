import React, { Component } from 'react'
import './Art.css'
import EventCard from '../EventCard/EventCard'
import { doGetArtEvents } from '../Firebase/Events'

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
                <div className="desc-flex">
                    <h1 className="art-header">Art</h1>
                    <p className="desc-art">No matter your genre preference, LA's got an active music scene for your taste -- and probably 
                        has a totally free ongoing night that'll please you, aurally. Here are LA's best free ongoing 
                        music nights,  we'd love to hear anything else we missed in the comments -- Please feel free to register 
                        and post any upcoming live shows coming up.</p>
                    <h1 className="art-header">Live Feed</h1>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Art</h1>
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






