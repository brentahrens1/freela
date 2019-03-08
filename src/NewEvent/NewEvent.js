import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { doCreateEvent } from '../Firebase/Events'
import './NewEvent.css'


class NewEvent extends Component {

    state = {
        name: "",
        category: "Music",
        img: "",
        description: "",
        date: "",
        address: "",
        createdby: ""
    }

    handleInput(e) {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.assign(this.state, {createdby: this.props.currentUser.uid})
        doCreateEvent(this.state)
            .then(snapShot => console.log(snapShot))
            this.props.history.push(`/${this.state.category}`)
    }
    

    render() {
        const { name, date, description, address, img, createdby} = this.state
        return(
            <div className="event-container">
                <form className="input-flex" onSubmit={this.handleSubmit}>
                    <h1>Select Category</h1>
                    <select className="select-menu" name='category' onChange={this.handleInput.bind(this)}>
                        <option>Music</option>
                        <option>Nature</option>
                        <option>Exercise</option>
                        <option>Art</option>
                    </select>
                    <input className="input1" onChange={this.handleInput.bind(this)} type="text" name="name" placeholder="name" value={name}/>
                    <input className="input2" onChange={this.handleInput.bind(this)} type="text" name="img" placeholder="picture" value={img}/>
                    <input className="input4" onChange={this.handleInput.bind(this)} type="text" name="date" placeholder="date" value={date}/>
                    <input className="input5" onChange={this.handleInput.bind(this)} type="text" name="description" placeholder="description" value={description}/>
                    <input className="input6" onChange={this.handleInput.bind(this)} type="text" name="address" placeholder="address" value={address}/>
                    <input className="input6" onChange={this.handleInput.bind(this)} type="text" name="createdby" placeholder="address" value={createdby}/>
                    <button className="newevent-btn" type="submit">Create Event</button>
                </form>
            </div>
        )
    }
}


export default withRouter(NewEvent)