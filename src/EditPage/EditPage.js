import React, { Component } from 'react';
import { doEditEvents, doGetOneEvent, doDeleteEvent } from '../Firebase/Events'

import { withRouter } from 'react-router-dom'

import './EditPage.css'


class EditEvent extends Component {

    state = {
        event: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        doGetOneEvent(this.props.match.params.id) 
            .then(snapShot => {
                this.setState({
                    event: snapShot.data()
                })
            }) 
    }



    handleInput=(e) =>{
        
        this.setState({
             event: {
                 ...this.state.event, 
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        doEditEvents(this.state.event, this.props.match.params.id)
            .then(snapShot => console.log(snapShot))
            this.props.history.push(`/${this.state.event.category}`)
    }
    
    handleDelete = (eventId) => {
        doDeleteEvent(this.props.match.params.id)
        .then(() => {
            this.props.history.push(`/${this.state.event.category}`)
        })
        // doDeleteEvent(this.props.match.params.id, eventId)
        // .then(() => {
        //     this.setState({ })
        // })
    }

    render() {
        const { name, date, description, address, img } = this.state.event
        return(
            <div className="edit-container">
                <form className="input-flex" onSubmit={this.handleSubmit}>
                    <h1>Edit Event</h1>
                    <input className="input1" onChange={this.handleInput} type="text" name="name" placeholder="name" defaultValue={name}/>
                    <input className="input2" onChange={this.handleInput} type="text" name="img" placeholder="picture" defaultValue={img}/>
                    <input className="input4" onChange={this.handleInput} type="text" name="date" placeholder="date" defaultValue={date}/>
                    <input className="input5" onChange={this.handleInput} type="text" name="description" placeholder="description" defaultValue={description}/>
                    <input className="input6" onChange={this.handleInput} type="text" name="address" placeholder="address" defaultValue={address}/>
                    <button className="edit-btn" type="submit">Submit</button>
                </form>
                    <button className="delete-btn"  onClick={(e) => this.handleDelete(e)}>Delete</button>
            </div>
        )
    }
}


export default withRouter(EditEvent)