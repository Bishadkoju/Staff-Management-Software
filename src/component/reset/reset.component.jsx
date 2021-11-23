import React, { Component } from 'react'

export default class Reset extends Component {

    handleSubmit = e => {
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3> Reset Passowrd</h3>


            <div className="">
                <label> Password</label>
                <input type = "password" className="" placeholder="Password" onChange={e => this.password = e.target.value}/>
            </div>

            <div className="">
                    <label> Confirm Password</label>
                    <input type = "password" className="" placeholder="COnfirm Password" onChange={e => this.confirmPassword = e.target.value}/>
            </div>

            <button className="">Submit</button>

        </form>


        )
    }
}
