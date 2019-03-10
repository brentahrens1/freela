import React, { Component } from 'react'
import './Exercise.css'
import EventCard from '../EventCard/EventCard'
import { doGetExerciseEvents } from '../Firebase/Events'

class Exercise extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        doGetExerciseEvents()
            .then(events => this.setState({events}))
    }

    render () {return(
        <div className="exercise-container">
            <div className="exercise-banner-flex">
                <img className="exercise-image" src="https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="exercise"/>
                <div className="desc-flex">
                    <h1 className="exercise-header">Exercise</h1>
                    <p className="desc-exercise">No matter your genre preference, LA's got an active music scene for your taste -- and probably 
                        has a totally free ongoing night that'll please you, aurally. Here are LA's best free ongoing 
                        music nights,  we'd love to hear anything else we missed in the comments -- Please feel free to register 
                        and post any upcoming live shows coming up.</p>
                    <h1 className="exercise-header">Live Feed</h1>
                </div>
            </div>
            <hr/>
            <h1 className="upcoming-header">Exercise</h1>
            <hr/>
            <div className="exercise-flex">
                {
                    this.state.events.map(e => 
                        <EventCard event={e} currentUser={this.props.currentUser}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Exercise
