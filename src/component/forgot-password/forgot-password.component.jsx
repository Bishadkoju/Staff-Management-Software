import React, { Component } from 'react'

export default class ForgotPassword extends Component {

    handleSubmit = e => {
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3> Reset Password</h3>


            <div className="">
                <label> Email</label>
                <input type = "email" className="" placeholder="First Name" onChange={e => this.email = e.target.value}/>
            </div>

            <button className="">Request</button>
        </form>

        )
    }
}
