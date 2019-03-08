import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { doGetUserEvents, doDeleteEvent } from '../Firebase/Users'
import './UserProfile.css'


import './UserProfile.css'

class UserProfile extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        doGetUserEvents(this.props.match.params.id)
            .then(events=>this.setState({events}))
            // .then(snapShot => console.log(snapShot)
            // )
    }

    deleteEvent = (userId, eventId) => {
        doDeleteEvent(userId, eventId)
            .then(() =>{
                console.log('it worked')
            this.setState({ events: this.state.events.filter(e => e.uid !== eventId) })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { uid } = this.props.currentUser
        return(
            <div className="profile-container">
                    <h1 className="profile-header">Your upcoming events</h1>
                <div className="profile-flex">
                    {
                        this.state.events.map(e =>
                            <div>
                                <div className="cards__item">
                                    <div className="card">
                                            <img className="card__image card__image--fence" alt="eventimg" src={e.img}/>
                                        <div className="card__content">
                                            <div className="card__title">{e.name}</div>
                                                <div className="card__title">{e.date}</div>
                                                    <p className="card__text">{e.description}</p>
                                                    <h3 className="card__text">{e.address}</h3>
                                                    <button className="btn btn--block card__btn" onClick={() => this.deleteEvent(uid,e.uid)}>Remove</button>
                                        </div>
                                    </div>
                                </div>                       
                            </div>  
                        )
                    
                    }

                </div>
            </div>
        )
    }
}

export default withRouter(UserProfile)