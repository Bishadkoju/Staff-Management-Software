import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {Navigate} from "react-router"
import "./login.styles.scss"


import Background from '../../component/background/background.component'

export default class Login extends Component {
    state = {

    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email:this.email,
            password: this.password,
        }

        axios.post("http://localhost:8000/login",data).then(
            res=> {
                console.log(res);
                this.setState({loggedIn: true})
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        // console.log(data);
    }
    render() {
        if (this.state.loggedIn){
            return <Navigate to = {"/"} />
        }
        return (
            <>
            <Background />
            <div className="form-container">
                
            <form onSubmit={this.handleSubmit} class="login-form">
                           
            
  
                <h3 className="header-text"> Log In</h3>
                <p className="login-text"> Get access to the management <br/> tool by loggin in</p>
                <div className="form-input">
                    
                    <input type = "email" className="" placeholder="Email Address" onChange={e => this.email = e.target.value}/>
                    
                    <input type = "password" className="" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>

                <p className="forgot">
                    <Link  className="forgot-text"to ={"/forgot"}>Forgot Password ?</Link>
                </p>
                <div class="button-container">
                <button className="login-button">Login</button>
                </div>
                
            </form>
            </div>
            </>
        )
    }
}
