import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: false,
            user: ''
        }
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }


    //Method section
    handleSignup(newUsername, NewPassword) {
        axios.post('/pets/signup', {username: newUsername, password: NewPassword})
             .then((response) => {
                 console.log(response.data)
                 this.setState({user: newUsername, loggedIn: true})
             })
             .catch((err) => console.error(err))
    }

    handleLogin(username, password) {
        axios.get('/pets/login', {params: {username: username, password, password}})
             .then((response) => {
                 console.log(response.data)
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
                        <Route path='/login' render = {() => <Login login = {this.handleLogin} />} />
                        <Route path='/signup' render = {() => <Signup signup = {this.handleSignup} />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 