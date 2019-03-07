import React, { Component } from 'react'
import './Nature.css'
import EventCard from '../EventCard/EventCard'
import { doGetNatureEvents } from '../Firebase/Events'

class Nature extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        doGetNatureEvents()
            .then(snapShot => this.setState({events: snapShot.docs.map(d => d.data())}))
    }

    render () {return(
        <div className="nature-container">
            <div className="nature-banner-flex">
                <img className="nature-image" src="https://www.kuhl.com/borninthemountains/wp-content/uploads/2018/05/Hidden-Trail.jpeg" alt="nature"/>
                <div className="desc-flex">
                    <h1 className="nature-header">Nature</h1>
                    <p className="desc-nature">No matter your genre preference, LA's got an active music scene for your taste -- and probably 
                        has a totally free ongoing night that'll please you, aurally. Here are LA's best free ongoing 
                        music nights,  we'd love to hear anything else we missed in the comments -- Please feel free to register 
                        and post any upcoming live shows coming up.</p>
                    <h1 className="nature-header">Live Feed</h1>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">All that nature has to offer</h1>
            <hr/>
            <div className="nature-flex">
                {
                    this.state.events.map(e => 
                        <EventCard event={e}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Nature



