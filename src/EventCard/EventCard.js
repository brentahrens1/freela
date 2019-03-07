import React from 'react'
import './EventCard.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


const EventCard = (props) => {
    console.log(props.event)
    return(
<div class="container">
  <div class="cellphone-container">    
      <div class="movie">       
        {/* <div class="menu"><i class="material-icons"></i></div> */}
        <img  class="movie-img" src={props.event.img} alt="card"></img>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1 className="event-name">{props.event.name}</h1>
              <ul class="movie-gen">
                <li>Hip-Hop /</li>
                <li>10PM  /</li>
                <li>LIVE</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>Details</h5>
            </div>
            <div class="col2">
               {/* <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul> */}
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">{props.event.description}</p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">{props.event.address}</p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"><h3>Save the date</h3></div>
            </div>
            {/* <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
            </div> */}
          </div>
        </div>
      </div>
  </div>
</div>

    )
}

export default EventCard