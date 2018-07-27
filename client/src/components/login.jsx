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
            <div className='login-container'>
                <h3 className = 'login-title' >Log In or Sign Up</h3>
                <br/>
                {this.props.error ? <div className="warning" >Invalid Username or Password.  please try again</div> : null}
                <input type='text' placeholder="Email" onChange = {this.handleUNChange} />
                <br/>
                <input type='password' placeholder="Password" onChange = {this.handlePWChange} />
                <br/>
                <button class="btn btn-success" onClick={() => this.props.fireLogin(this.state.usernameValue, this.state.passwordValue) } >Login</button>
                <button class="btn btn-info" onClick={() => this.props.fireSignup(this.state.usernameValue, this.state.passwordValue) } >Signup</button>

                <div id='auth-container'></div>
            </div>
        )
    }
}

export default Login