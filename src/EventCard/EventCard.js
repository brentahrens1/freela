import React from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom'


const EventCard = ({event}) => {
    console.log(event)
    return(
      <div class="cards__item">
      <div class="card">
        <img class="card__image card__image--fence" alt="eventimg" src={event.img}/>
        <div class="card__content">
          <div class="card__title">{event.name}</div>
          <div class="card__title">{event.date}</div>
          <p class="card__text">{event.description}</p>
          <h3 class="card__text">{event.address}</h3>
          <button class="btn btn--block card__btn">Button</button>
          <Link to={`/event/${event.uid}/edit`}><button class="btn btn--block card__btn">Edit</button></Link>
        </div>
      </div>
    </div>

    )
}

export default EventCard