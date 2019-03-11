import React, { Component } from 'react'
import './Exercise.css'
import EventCard from '../EventCard/EventCard'
import { doGetExerciseEvents } from '../Firebase/Events'
import TwitterFeedExecise from '../TwitterFeedExercise/TwitterFeedExercise'

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
                <div className="exercise-desc-flex">
                    <TwitterFeedExecise/>
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
