import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Swiper from './components/swiper.jsx'
import Favorites from './components/favorites.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: false,
            user: '',
            loginError: false,
            signupError: false,
            swipeRights: []
        }
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.goToGlobal = this.goToGlobal.bind(this)
        this.swipeRight = this.swipeRight.bind(this)
        this.handleSwipeFetch = this.handleSwipeFetch.bind(this)
    }


    //Method section
    handleSignup(newUsername, NewPassword) {
        axios.post('/pets/signup', {username: newUsername, password: NewPassword})
             .then((response) => {
                 if (response.data) this.setState({user: newUsername, loggedIn: true, signupError: false}, () => this.goToGlobal())
                 else this.setState({signupError: true})
             })
             .catch((err) => console.error(err))
    }

    swipeRight(newPet) {
        let currentRights = this.state.swipeRights
        currentRights.push(newPet)
        this.setState({swipeRights: currentRights})
        axios.post('/pets/swipeRight', {pet: newPet, user: this.state.user})
             .then((repsonse) => console.log('we saved that to your favorites!'))
             .catch((err) => console.error(err))
    }

    handleLogin(username, password) {
        axios.get('/pets/login', {params: {username: username, password, password}})
             .then((response) => {
                 if (response.data) {
                     this.setState({user: username, loggedIn: true, loginError: false});
                     this.goToGlobal()
                 }
                 else this.setState({loginError: true})
             })
             .catch((err) => console.error(err))
    }

    goToGlobal() {
        console.log('redirecting to global!');
        <Redirect to='/global' />
    }

    handleSwipeFetch() {
        axios.get('/pets/swipeRight', {params: {user: this.state.user}})
             .then((response) => {
                 let currentRights = this.state.swipeRights
                 currentRights.concat(response.data)
                 this.setState({swipeRights: currentRights})
             })
             .catch((err) => console.error(err))
    }


    //Render Section
    render() {
        return(
            <Router>
                <div className="container">
                    <Navbar loggedIn = {this.state.loggedIn} />
                    we're on the page!
                    <Switch>
                        <Route exact path='/' render = {() => <Redirect to='/login' />} />
                        <Route path='/login' render = {() => <Login login = {this.handleLogin} error = {this.state.loginError} />} />
                        <Route path='/signup' render = {() => <Signup signup = {this.handleSignup} error = {this.state.signupError} />} />
                        <Route path='/global' render = {() => <Swiper swipe = {this.swipeRight} /> } />
                        <Route path='/rights' render = {() => <Favorites faves = {this.state.swipeRights.length > 0 ? this.state.swipeRights : null} /> } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 