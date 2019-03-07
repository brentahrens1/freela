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
            .then(snapShot => this.setState({events: snapShot.docs.map(d => d.data())}))
    }

    render () {return(
        <div className="exercise-container">
            <div className="exercise-banner-flex">
                <img className="exercise-image" src="https://fitt.co/los-angeles/wp-content/uploads/sites/33/2018/01/AthletaLA-e1514946771781.jpg" alt="exercise"/>
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
                        <EventCard event={e}/>
                    )
                }
            </div>
        </div>
    )}
}

export default Exercise
