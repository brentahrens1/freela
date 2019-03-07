import React from 'react'
import './EventCard.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const EventCard = (props) => {
    console.log(props.event)
    return(
      <div class="cards__item">
      <div class="card">
        <img class="card__image card__image--fence" alt="eventimg" src={props.event.img}/>
        <div class="card__content">
          <div class="card__title">{props.event.name}</div>
          <div class="card__title">{props.event.date}</div>
          <p class="card__text">{props.event.description}</p>
          <h3 class="card__text">{props.event.address}</h3>
          <button class="btn btn--block card__btn">Button</button>
        </div>
      </div>
    </div>

    )
}

export default EventCard