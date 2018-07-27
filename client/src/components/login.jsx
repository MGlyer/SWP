import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameValue: '',
            passwordValue: ''
        }
        this.handlePWChange = this.handlePWChange.bind(this)
        this.handleUNChange = this.handleUNChange.bind(this)
    }

    handleUNChange (e) {
        e.preventDefault()
        this.setState({usernameValue: e.target.value})
    }

    handlePWChange (e) {
        e.preventDefault()
        this.setState({passwordValue: e.target.value})
    }


    render() {
        return(
            <div>
                <h3>Log In</h3>
                {this.props.error ? <div>Invalid Username or Password.  please try again</div> : null}
                <input type='text' placeholder="Email" onChange = {this.handleUNChange} />
                <br/>
                <input type='password' placeholder="Password" onChange = {this.handlePWChange} />
                <br/>
                <button onClick={() => this.props.fireLogin(this.state.usernameValue, this.state.passwordValue) } >email login</button>
                <button onClick={ this.props.googleLogin } >Google Login</button>

                <div id='auth-container'></div>
            </div>
        )
    }
}

export default Login