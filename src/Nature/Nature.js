import React, { Component } from 'react'
import './Nature.css'
import EventCard from '../EventCard/EventCard'
import { doGetNatureEvents } from '../Firebase/Events'
import TwitterFeedNature from '../TwitterFeedNature/TwitterFeedNature'

class Nature extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        doGetNatureEvents()
            .then(events => this.setState({events}))
    }

    render () {return(
        <div className="nature-container">
            <div className="nature-banner-flex">
                <img className="nature-image" src="https://www.kuhl.com/borninthemountains/wp-content/uploads/2018/05/Hidden-Trail.jpeg" alt="nature"/>
                <div className="nature-desc-flex">
                    <TwitterFeedNature/>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Run Free Run Wild</h1>
            <hr/>
            <div className="nature-flex">
                {
                    this.state.events.map((e, i) => 
                        <EventCard event={e} key={i} currentUser={this.props.currentUser}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Nature



