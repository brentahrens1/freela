import React, { Component } from 'react';
import './App.css';

import { Switch, Route, withRouter} from 'react-router-dom'
import { auth } from './Firebase/Firebase';
import { doGetUser } from './Firebase/Users';

import Register from './Auth/Register'
import Login from './Auth/Login'

import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'
import Music from './Music/Music'
import Nature from './Nature/Nature'
import Exercise from './Exercise/Exercise'
import Art from './Art/Art'
import NewEvent from './NewEvent/NewEvent'
import EditEvent from './EditPage/EditPage'
import UserProfile from './UserProfile/UserProfile'

class App extends Component {

  state = {
    currentUser: {}
  }

  componentDidMount() {
    auth
    .onAuthStateChanged(authUser =>
      authUser &&
      doGetUser(authUser.uid)
      .then(currentUser => {
       if (currentUser) {
         this.setState({
           currentUser: Object.assign(currentUser.data(), {uid: currentUser.id})
          }, ()=>{
            // this.props.history.push("/")
          })
       } else {
        //  this.props.history.push("/register")
       }
        })
       
      )
  }

  doLogOut = () => {
    auth.signOut()
    this.setState({
      currentUser: {}
      
    })
  }

  doSetCurrentUser = (user)=>{
    this.setState({
      currentUser: user
    })
  }

  render() {
    return (
      <div className="App">
      <Header
        currentUser={this.state.currentUser}
        doLogOut={this.doLogOut}
      />
        <NavBar
          currentUser={this.state.currentUser}
          doLogOut={this.doLogOut}
        />
        <Switch>
          <Route exact path="/" component={() => <Home currentUser={this.state.currentUser} doLogOut={this.doLogOut}/>}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={() => <Login doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path="/music" component={() => <Music currentUser={this.state.currentUser} />}/>
          <Route exact path="/nature" component={() => <Nature currentUser={this.state.currentUser} />}/>}/>
          <Route exact path="/exercise" component={() => <Exercise currentUser={this.state.currentUser} />}/>}/>
          <Route exact path="/art" component={() => <Art currentUser={this.state.currentUser} />}/>}/>
          <Route exact path="/newevent" component={() => <NewEvent currentUser={this.state.currentUser}/>}/>
          <Route exact path="/event/:id/edit" component={() => <EditEvent/>}/>
          <Route exact path="/profile/:id" component={() => <UserProfile doSetCurrrentUser={this.doSetCurrentUser} currentUser={this.state.currentUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
