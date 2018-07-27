import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameValue: '',
            passwordValue: ''
        }
        this.handleUNChange = this.handleUNChange.bind(this)
        this.handlePWChange = this.handlePWChange.bind(this)
    }

    handleUNChange(e) {
        e.preventDefault();
        this.setState({usernameValue: e.target.value})
    }

    handlePWChange(e) {
        e.preventDefault();
        this.setState({passwordValue: e.target.value})
    }



    render() {
        return(
            <div>
                <h2>Sign up</h2>
                {this.props.error ? <div>That Username is already taken.  Please try another</div>: null}
                Username: <input type= 'text' onChange = {this.handleUNChange} />
                <br/>
                Password: <input type= 'password' onChange = {this.handlePWChange} />
                <br/>
                <button onClick = {() => this.props.signup(this.state.usernameValue, this.state.passwordValue)}>Sign up</button>
                <button onClick = {() => this.props.fireSignup(this.state.usernameValue, this.state.passwordValue)}>Email Signup</button>
            </div>
        )
    }
}

export default Signup