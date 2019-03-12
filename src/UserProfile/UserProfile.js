import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { doGetUserEvents, doDeleteEvent, doUpdateUserInfo } from '../Firebase/Users'
import './UserProfile.css'


import './UserProfile.css'

class UserProfile extends Component {

    state = {
        events: [],
        userImg: this.props.currentUser.userImg ||"http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-pictures-icon-4.jpg",
        userBio: this.props.currentUser.userBio,
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
        let { userImg, userBio} = this.state
        userImg = userImg.length < 0 ? "http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-pictures-icon-4.jpg" : userImg
        const userBioObj = { 
            ...this.props.currentUser,
            userImg,
            userBio
        }
        console.log(userBioObj )
        doUpdateUserInfo(this.props.currentUser.uid, userBioObj)
            .then(snapShot => this.props.doSetCurrrentUser(userBioObj))

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
                            currentUser={this.props.currentUser}
                            handleInput={this.handleInput} 
                            showProfile={() => this.setState({showEditForm: !this.state.showEditForm})}
                            addBio={this.addBio}
                            />
                        : <div>
                            <div className="profileinfo-container">
                                <h1 className="profile-header">{this.props.currentUser.username}</h1>
                                <img className="profile-img" src={this.props.currentUser.userImg} alt="profile-pic"/>
                                <p className="profile-description">{this.props.currentUser.userBio}</p>
                                <button className="profileedit-btn" onClick={() => this.setState({showEditForm: !this.state.showEditForm})}>Edit Profile</button>
                            </div>
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
                        </div>
                }
            </div>
        )
    }
}






const EditProfileForm = ({showProfile, handleInput, addBio, currentUser}) =>
    <div>
        <form className="edit-user-container" onSubmit={e => addBio(e)}>
            <h1 className="edituser-header">User Profile</h1>
            <input className="edit-user-input1"
                type="text"
                name="userImg"
                placeholder="profile pic"
                defaultValue={currentUser.userImg}
                onChange={e => handleInput(e)}
            />
            <input className="edit-user-input1"
                type="text"
                name="userBio"
                placeholder="Bio"
                defaultValue={currentUser.userBio}
                onChange={e => handleInput(e)}
            />
            <button className="profileedit-btn" type="submit">Submit</button>
        </form>
        {/* <button onClick={showProfile}>show profile</button> */}
    </div>

export default withRouter(UserProfile)