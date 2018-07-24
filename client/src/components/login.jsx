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
                Username: <input type='text' onChange = {this.handleUNChange} />
                <br/>
                Password: <input type='password' onChange = {this.handlePWChange} />
            </div>
        )
    }
}

export default Login