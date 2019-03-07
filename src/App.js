import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
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

class App extends Component {

  state = {
    currentUser: {}
  }

  componentDidMount() {
    auth
    .onAuthStateChanged(authUser =>
      authUser &&
      doGetUser(authUser.uid)
      .then(currentUser => this.setState({currentUser: currentUser.data()}))
      )
  }

  doLogOut = () => {
    auth.signOut()
    this.setState({
      currentUser: {}
      
    })
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <hr/>
        <NavBar
          currentUser={this.state.currentUser}
          doLogOut={this.doLogOut}
        />
      <hr/>
        <Switch>
          <Route exact path="/" component={() => <Home doLogOut={this.doLogOut}/>}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={() => <Login doSetCurrentUser={(user) => this.setState({currentUser: user})}/>}/>
          <Route exact path="/music" component={() => <Music/>}/>
          <Route exact path="/nature" component={() => <Nature/>}/>
          <Route exact path="/exercise" component={() => <Exercise/>}/>
          <Route exact path="/art" component={() => <Art/>}/>
          <Route exact path="/newevent" component={() => <NewEvent/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
