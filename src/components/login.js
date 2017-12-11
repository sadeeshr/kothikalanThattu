import React, { Component } from 'react'

class Login extends Component {
    gologin = () => {
        this.props.authSuccess()
        this.props.history.push("/")
    }

    render () {
        return (
            <div>
                Login Page <br/>
                <button onClick={this.gologin.bind(this)}>Login Here!</button>
                
            </div>
        )
    }
}

export default Login