import React, { Component } from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom'
import { doAddEventToUser } from '../Firebase/Users'


class EventCard extends Component {
    doAddEvent = () =>
      doAddEventToUser(this.props.currentUser.uid, {eventId: this.props.event.uid, name: this.props.event.name, img: this.props.event.img, address: this.props.event.address , description: this.props.event.description})

    render () {
      const { event } = this.props
        return(
          <div className="cards__item">
          <div className="card">
            <img className="card__image card__image--fence" alt="eventimg" src={event.img}/>
            <div className="card__content">
              <div className="card__title">{event.name}</div>
              <div className="card__title">{event.date}</div>
              <p className="card__text">{event.description}</p>
              <h3 className="card__text">{event.address}</h3>
              <button className="btn btn--block card__btn" onClick={() => this.doAddEvent()}>Save This Event</button>
              <Link to={`/event/${event.uid}/edit`}><button className="btn btn--block card__btn">Edit</button></Link>
            </div>
          </div>
        </div>
      )}
}

export default EventCard