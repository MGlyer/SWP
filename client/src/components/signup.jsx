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
                <input type= 'text' placeholder="Email" onChange = {this.handleUNChange} />
                <br/>
                <input type= 'password' placeholder='Password' onChange = {this.handlePWChange} />
                <br/>
                <button onClick = {() => this.props.fireSignup(this.state.usernameValue, this.state.passwordValue)}>Email Signup</button>
            </div>
        )
    }
}

export default Signup