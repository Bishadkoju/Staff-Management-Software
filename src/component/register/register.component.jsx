import React, { Component } from 'react'
import axios from 'axios'
export default class Register extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email:this.email,
            password: this.password,
            password_confirm : this.confirmPassword
            
        }
        axios.post("http://localhost:8000/register",data).then(
            res=> {
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        // console.log(data);
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3> Sign Up</h3>

                <div className="">
                    <label> First Name</label>
                    <input type = "text" className="" placeholder="First Name" onChange={e => this.firstName = e.target.value} />
                </div>

                <div className="">
                    <label> Last Name</label>
                    <input type = "text" className="" placeholder="Last Name" onChange={e => this.lastName = e.target.value}/>
                </div>

                <div className="">
                    <label> Email</label>
                    <input type = "email" className="" placeholder="First Name" onChange={e => this.email = e.target.value}/>
                </div>

                <div className="">
                    <label> Password</label>
                    <input type = "password" className="" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>

                <div className="">
                    <label> Confirm Password</label>
                    <input type = "password" className="" placeholder="COnfirm Password" onChange={e => this.confirmPassword = e.target.value}/>
                </div>

                <button className="">Sign Up</button>
            </form>

        )
    }
}
