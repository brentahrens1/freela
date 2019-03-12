import React, { Component } from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom'
import { doAddEventToUser, doGetUser } from '../Firebase/Users'


class EventCard extends Component {

  state={
    user:{}
  }
    doAddEvent = () =>{
      doAddEventToUser(this.props.currentUser.uid, {eventId: this.props.event.uid, name: this.props.event.name, img: this.props.event.img, address: this.props.event.address , description: this.props.event.description})
    }

    componentDidMount(){

      doGetUser(this.props.event.createdby).then(snapShot =>{
        this.setState({
          user: snapShot.data()
        })
      })
    }

    render () {
      const { event } = this.props

        return(
          <div className="cards__item">
            <div className="card">
              <img className="card__image card__image--fence" alt="eventimg" src={event.img}/>
              <div className="card__content">
              <div className="showcard-bottom">
                <div className="card__title">{event.name}</div>
              </div>
              <div className="showcard-bottom">
                <div className="card__title">{event.date}</div>
              </div>
              <div className="showcard-bottom">
                <p className="card__text">{event.description}</p>
              </div>
                <h3 className="card__text">{event.address}</h3>
                <p className="card__text">Posted by: {this.state.user.username}</p>
                {this.props.currentUser.uid
                ?
                (
                  <div>
                    <button className="btn btn--block card__btn" onClick={this.doAddEvent}>Save This Event</button>
                  </div>
                )
                :
                (
                  <div/>
                )
                }
                {event.createdby && this.props.currentUser.uid === event.createdby &&

                  <Link to={`/event/${event.uid}/edit`}><button className="btn btn--block card__btn">Edit</button></Link>
                }
              </div>
            </div>
          </div>
      )}
}

export default EventCard