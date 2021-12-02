import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {Navigate} from "react-router"
import "./login.styles.scss"
import Header from '../../component/header/header.compoent'

import Background from '../../component/background/background.component'

export default class Login extends Component {
    state = {
        loggedIn: false
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email:this.email,
            password: this.password,
        }

        axios.post("login/",data).then(
            res=> {
                localStorage.setItem("token", res.data.key);
                this.setState({loggedIn: true})
                this.props.setUser(res.data.user)
                console.log(res)
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
            return <Navigate to = {"/home"} />
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
