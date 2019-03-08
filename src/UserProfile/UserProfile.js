import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { doGetUserEvents, doDeleteEvent, doUpdateUserInfo } from '../Firebase/Users'
import './UserProfile.css'


import './UserProfile.css'

class UserProfile extends Component {

    state = {
        events: [],
        userImg: "a test",
        userBio: "some words",
        showEditForm: false
    }

    componentDidMount() {
        doGetUserEvents(this.props.match.params.id)
            .then(events=>this.setState({events}))

        // doGetUser(this.props.event.createdby).then(snapShot =>{
        //   this.setState({
        //     user: snapShot.data()
        //   })
        // })
            // .then(snapShot => console.log(snapShot)
            // )
    }

    deleteEvent = (userId, eventId) => {
        doDeleteEvent(userId, eventId)
            .then(() =>{
                console.log('it worked')
            this.setState({ events: this.state.events.filter(e => e.uid !== eventId) })
            })
            .catch(err => {
                console.log(err)
            })
    }

    addBio = e => {
        e.preventDefault()
        const { userImg, userBio} = this.state
        const userBioObj = { 
            userImg,
            userBio
        }
        console.log(userBioObj )
        doUpdateUserInfo(this.props.currentUser.uid, userBioObj)
    }

    handleInput = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    render() {
        const { uid } = this.props.currentUser
        // this.addBio()
        return(
            <div className="profile-container">
                {
                    this.state.showEditForm
                        ? <EditProfileForm 
                            handleInput={this.handleInput} 
                            showProfile={() => this.setState({showEditForm: !this.state.showEditForm})}
                            addBio={this.addBio}
                            />
                        : <div>
                            <img src={this.props.currentUser.userImg} alt="profile-pic"/>
                            <p>{this.props.currentUser.userBio}</p>
                            <h1 className="profile-header">Your upcoming events</h1>
                            <div className="profile-flex">
                            {
                                this.state.events.map(e =>
                                    <div>
                                        <div className="cards__item">
                                            <div className="card">
                                                    <img className="card__image card__image--fence" alt="eventimg" src={e.img}/>
                                                <div className="card__content">
                                                    <div className="card__title">{e.name}</div>
                                                        <div className="card__title">{e.date}</div>
                                                        <p className="card__text">{e.description}</p>
                                                        <h3 className="card__text">{e.address}</h3>
                                                        <button className="btn btn--block card__btn" onClick={() => this.deleteEvent(uid,e.uid)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>                       
                                    </div>  
                                )

                            }

                            </div>
                            <button onClick={() => this.setState({showEditForm: !this.state.showEditForm})}>show form</button>
                            <button onClick={this.addBio}>add button</button>
                        </div>
                }
            </div>
        )
    }
}






const EditProfileForm = ({showProfile, handleInput, addBio}) =>
    <div>
        <form onSubmit={e => addBio(e)}>
            <h1 className="edituser-header">User Profile</h1>
            <input className="input1"
                type="text"
                name="userImg"
                placeholder="profile pic"
                onChange={e => handleInput(e)}
            />
            <input className="input1"
                type="text"
                name="userBio"
                placeholder="Bio"
                onChange={e => handleInput(e)}
            />
            <button type="submit">Submit</button>
        </form>
        <button onClick={showProfile}>show profile</button>
    </div>

export default withRouter(UserProfile)