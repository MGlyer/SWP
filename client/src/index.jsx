import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Swiper from './components/swiper.jsx'
import Favorites from './components/favorites.jsx'
const {auth} = require('./../../database/connection.js')

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
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.goToGlobal = this.goToGlobal.bind(this)
        this.swipeRight = this.swipeRight.bind(this)
        this.handleSwipeFetch = this.handleSwipeFetch.bind(this)
        this.handleSignout = this.handleSignout.bind(this)
        this.handleFirebaseLogin = this.handleFirebaseLogin.bind(this)
        this.handleFirebaseSignup = this.handleFirebaseSignup.bind(this)
        this.handleAuthChange = this.handleAuthChange.bind(this)
        this.handleFirebaseSignout = this.handleFirebaseSignout.bind(this)
    }

    componentDidMount() {
        this.handleAuthChange()
    }


    //Method section
    handleSignup(newUsername, NewPassword) {
        axios.post('/pets/signup', {username: newUsername, password: NewPassword})
             .then((response) => {
                 if (response.data) this.setState({user: newUsername, loggedIn: true, signupError: false, redirect: true}, () => this.goToGlobal())
                 else this.setState({signupError: true})
             })
             .catch((err) => console.error(err))
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
                () => this.handleSwipeFetch())
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

    handleLogin(username, password) {
        console.log('you clicked a button!')
        axios.get('/pets/login', {params: {username: username, password, password}})
             .then((response) => {
                 if (response.data) {
                     this.setState({user: username, loggedIn: true, loginError: false, redirect: true}, () => {
                        this.handleSwipeFetch()
                     });
                     
                 }
                 else this.setState({loginError: true})
             })
             .catch((err) => console.error(err))
    }

    goToGlobal() {
        console.log('redirecting to global!');
        return <Redirect to='/global' />
    }

    handleSwipeFetch() {
        axios.get('/pets/swipeRight', {params: {user: this.state.user}})
             .then((response) => {
                 let currentRights = this.state.swipeRights
                 let newRights = currentRights.concat(response.data)
                 console.log(newRights)
                 this.setState({swipeRights: newRights})
             })
             .catch((err) => console.error(err))
    }

    handleSignout() {
        this.setState({user: '', loggedIn: false, swipeRights: [], redirect: false})
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
                        <Route path='/login' render = {() => <Login login = {this.handleLogin} error = {this.state.loginError} 
                            fireLogin = {this.handleFirebaseLogin} />} />
                        <Route path='/signup' render = {() => <Signup signup = {this.handleSignup} error = {this.state.signupError} 
                            fireSignup = {this.handleFirebaseSignup} />} />
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