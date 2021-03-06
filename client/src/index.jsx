import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Swiper from './components/swiper.jsx'
import Favorites from './components/favorites.jsx'
const {auth, googleAuth} = require('./../../database/connection.js')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: false,
            user: '',
            loginError: false,
            signupError: false,
            swipeRights: [],
            redirect: false
        }
        this.swipeRight = this.swipeRight.bind(this)
        this.handleSwipeFetch = this.handleSwipeFetch.bind(this)
        this.handleFirebaseLogin = this.handleFirebaseLogin.bind(this)
        this.handleFirebaseSignup = this.handleFirebaseSignup.bind(this)
        this.handleAuthChange = this.handleAuthChange.bind(this)
        this.handleFirebaseSignout = this.handleFirebaseSignout.bind(this)
        this.handleGoogleAuth = this.handleGoogleAuth.bind(this)
    }

    componentDidMount() {
        this.handleAuthChange()
    }


    //Method section

    handleGoogleAuth() {
        console.log('you clicked the google button!')
        auth.signInWithPopup(googleAuth)
            .then((result) => {
                let token = result.credential.accessToken;
                // auth.signInWithCredential(token)
                let user = result.user
                console.log('youre logged in!', result.user)
            })
            .catch((error) => console.log("something went wrong...", error))
    }

    handleFirebaseLogin(username, password) {
        auth.signInWithEmailAndPassword(username, password)
            .catch((error) => this.setState({loginError: true}))
    }

    handleFirebaseSignup(username, password) {
        auth.createUserWithEmailAndPassword(username, password)
            .then(() => axios.post('/pets/signup', {username: username, password: password})
                             .catch((err) => console.log(err)))
            .catch((error) => this.setState({loginError: true}))
    }

    handleFirebaseSignout() {
        auth.signOut()
        this.setState({user: '', loggedIn: false, swipeRights: [], redirect: false})
    }

    handleAuthChange() {
        auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser)
                let scrubbedEmail = firebaseUser.email.split('.').join('_')
                this.setState({user: scrubbedEmail, loggedIn: true, loginError: false, redirect: true}, 
                () => {
                    console.log('current username', this.state.user)
                    this.handleSwipeFetch()})
            } else {
                console.log('not logged in')
            }
        })
    }

    swipeRight(newPet) {
        let currentRights = this.state.swipeRights
        currentRights.push(newPet)
        this.setState({swipeRights: currentRights})
        axios.post('/pets/swipeRight', {pet: newPet, user: this.state.user})
             .then((repsonse) => console.log('we saved that to your favorites!'))
             .catch((err) => console.error(err))
    }


    handleSwipeFetch() {
        axios.get('/pets/swipeRight', {params: {user: this.state.user}})
             .then((response) => {
                 let currentRights = this.state.swipeRights
                 let newRights = currentRights.concat(response.data)
                 console.log('new faves', newRights)
                 console.log('old faves', currentRights)
                 this.setState({swipeRights: newRights})
             })
             .catch((err) => console.error(err))
    }


    //Render Section
    render() {
        return(
            <Router>
                <div>
                {this.state.redirect ? <Redirect to='/global' /> : null }
                    <Navbar loggedIn = {this.state.loggedIn} signout = {this.handleFirebaseSignout} />
                    <Switch>
                        <Route exact path='/' render = {() => <Redirect to='/login' />} />
                        <Route path='/login' render = {() => <Login error = {this.state.loginError} googleLogin = {this.handleGoogleAuth}
                            fireLogin = {this.handleFirebaseLogin} fireSignup = {this.handleFirebaseSignup} />} />
                        <Route path='/global' render = {() => <Swiper swipe = {this.swipeRight} /> } />
                        <Route path='/rights' render = {() => <Favorites past = {this.handleSwipeFetch} 
                            faves = {this.state.swipeRights.length > 0 ? this.state.swipeRights : null} /> } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 