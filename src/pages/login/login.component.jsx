import React, { Component } from 'react'
import axiosInstance from "../../HelperFunction/Axios";
import {Link} from "react-router-dom"
import {Navigate} from "react-router"
import "./login.styles.scss"
import Header from '../../component/header/header.compoent'

import Background from '../../component/background/background.component'

export default class Login extends Component {
    state = {
        loggedIn: false
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            email:this.email,
            password: this.password,
        }

        try {
            const res = await axiosInstance.post("auth/login/",data)
            console.log(res)
            if(res.status === 200) {
                console.log('ok')
                localStorage.setItem("token", res.data.key);
                this.setState({loggedIn: true})
            }
          } catch (err) {
            console.log(err);
          }

    }
    render() {
        if (this.state.loggedIn){
            return <Navigate to = {"/dashboard"} />
        }
        return (
            <>
            <Background />
            <Header/>
            <div className="form-container">
                
            <form onSubmit={this.handleSubmit} class="login-form">
                <h3 className="header-text"> Log In</h3>
                <p className="login-text"> Get access to the management <br/> tool by loggin in</p>
                <div className="form-input">
                    
                    <input type = "name" className="" placeholder="Email Address" required onChange={e => this.email = e.target.value}/>
                    
                    <input type = "password" className="" placeholder="Password" required onChange={e => this.password = e.target.value}/>
                </div>

                <p className="forgot">
                    <Link  className="forgot-text"to ={"/forgot"}>Forgot Password ?</Link>
                    <br/>
                    <Link  className="forgot-text"to ={"/register"}>Register</Link>
                </p>
                
                <div class="button-container">
                <button onChange={this.handleSubmit} className="login-button">Login</button>
                </div>
                
            </form>
            </div>
            </>
        )
    }
}
