import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Login from './components/login.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: true
        }
    }


    //Method section



    //Render Section
    render() {
        return(
            <Router>
                <div className="container">
                    <Navbar loggedIn = {this.state.loggedIn} />
                    we're on the page!
                    <Switch>
                        <Route exact path='/' render = {() => <Redirect to='/login' />} />
                        <Route path='/login' component = {Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App />, document.getElementById('app')) 