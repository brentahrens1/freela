import React, { Component } from 'react';
import { doEditEvents, doGetOneEvent } from '../Firebase/Events'

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
        console.log('click')
        e.preventDefault();
        doEditEvents(this.state.event, this.props.match.params.id)
            .then(snapShot => console.log(snapShot))
            this.props.history.push(`/${this.state.event.category}`)
    }
    

    render() {
        const { name, category, date, description, address, img } = this.state.event
        return(
            <div className="edit-container">
                <form className="input-flex" onSubmit={this.handleSubmit}>
                    <h1>Select Category</h1>
                    <select className="select-menu" name='category' onChange={this.handleInput}>
                        <option>----</option>
                        <option>Music</option>
                        <option>Nature</option>
                        <option>Exercise</option>
                        <option>Art</option>
                    </select>
                    <input className="input1" onChange={this.handleInput} type="text" name="name" placeholder="name" defaultValue={name}/>
                    <input className="input2" onChange={this.handleInput} type="text" name="img" placeholder="picture" defaultValue={img}/>
                    <input className="input3" onChange={this.handleInput} type="text" name="category" placeholder="category" defaultValue={category}/>
                    <input className="input4" onChange={this.handleInput} type="text" name="date" placeholder="date" defaultValue={date}/>
                    <input className="input5" onChange={this.handleInput} type="text" name="description" placeholder="description" defaultValue={description}/>
                    <input className="input6" onChange={this.handleInput} type="text" name="address" placeholder="address" defaultValue={address}/>
                    <button className="edit-btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default withRouter(EditEvent)