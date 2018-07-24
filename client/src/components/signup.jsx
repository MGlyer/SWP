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
                Username: <input type= 'text' onChange = {this.handleUNChange} />
                <br/>
                Password: <input type= 'password' onChange = {this.handlePWChange} />
                <button onClick = {props.handleSignUp}>Sign up</button>
            </div>
        )
    }
}

export default Signup