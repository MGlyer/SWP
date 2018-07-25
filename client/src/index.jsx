import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Swiper from './components/swiper.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: false,
            user: '',
            loginError: false,
            signupError: false
        }
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }


    //Method section
    handleSignup(newUsername, NewPassword) {
        axios.post('/pets/signup', {username: newUsername, password: NewPassword})
             .then((response) => {
                 if (response.data) this.setState({user: newUsername, loggedIn: true, signupError: false})
                 else this.setState({signupError: true})
             }, () => <Redirect to= '/global'/>)
             .catch((err) => console.error(err))
    }

    handleLogin(username, password) {
        axios.get('/pets/login', {params: {username: username, password, password}})
             .then((response) => {
                 if (response.data) this.setState({user: username, loggedIn: true, loginError: false})
                 else this.setState({loginError: true})
             }, () => <Redirect to= '/global'/>)
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
                        <Route path='/global' render = {() => <Swiper /> } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 