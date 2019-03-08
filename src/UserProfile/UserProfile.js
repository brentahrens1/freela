import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { doGetUserEvents } from '../Firebase/Users'

import './UserProfile.css'

class UserProfile extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        console.log(this.props)
        doGetUserEvents(this.props.match.params.id)
            .then(snapShot => this.setState({ events: snapShot.docs.map(d => d.data())}))
    }
    render() {
        return(
            <div>
                {
                    this.state.events.map(e =>
                        <div>
                        <h1>{e.name}</h1>
                        <img src={e.img} alt="user"></img>
                        <p>{e.address}</p>
                        <p>{e.description}</p>
                        
                        
                        </div>  
                    )
                }
            </div>
        )
    }
}

export default withRouter(UserProfile)