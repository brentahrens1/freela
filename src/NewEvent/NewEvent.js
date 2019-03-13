import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { doCreateEvent, doAddStoreFile } from '../Firebase/Events'
import './NewEvent.css'


class NewEvent extends Component {

    state = {
        name: "",
        category: "Music",
        description: "",
        date: "",
        address: "",
        createdby: "",
        img: null
    }

    handleInput(e) {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.assign(this.state, {createdby: this.props.currentUser.uid || ''})
        this.state.img
            ? doAddStoreFile(this.state.img)
                .then(img => img.ref.getDownloadURL())
                .then(url => {
                    const addedUrl = Object.assign(data, {img: url})
                    doCreateEvent(addedUrl)
                        .then(snapShot => {
                            this.props.history.push(`/${this.state.category}`)
                        })
                    
                })
            : console.log('no file')
        // doCreateEvent(data)
        //     .then(snapShot => {
        //         this.props.history.push(`/${this.state.category}`)
            // })
            
    }
    
    handleFile = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }

    render() {
        console.log(this.state)
        const { name, date, description, address } = this.state
        return(
            <div className="event-container">
                <form className="input-flex" onSubmit={this.handleSubmit}>
                    <h1 className="newevent-header">Select Category</h1>
                    <select className="select-menu" name='category' onChange={this.handleInput.bind(this)}>
                        <option>Music</option>
                        <option>Nature</option>
                        <option>Exercise</option>
                        <option>Art</option>
                    </select>
                    <input className="input1" onChange={this.handleInput.bind(this)} type="text" name="name" placeholder="name" value={name}/>
                    <p className="picture-upload">upload picture</p>
                    <input id="file-upload" className="input2" onChange={this.handleFile.bind(this)} type="file" name="img"/>
                    <input className="input3" onChange={this.handleInput.bind(this)} type="text" name="date" placeholder="date" value={date}/>
                    <input className="input4" onChange={this.handleInput.bind(this)} type="text" name="description" placeholder="description" value={description}/>
                    <input className="input5" onChange={this.handleInput.bind(this)} type="text" name="address" placeholder="address" value={address}/>
                    <button className="newevent-btn" type="submit">Create Event</button>
                </form>
            </div>
        )
    }
}


export default withRouter(NewEvent)