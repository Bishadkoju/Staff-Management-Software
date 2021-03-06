import React, { Component } from 'react'
import "../../pages/login/login.styles.scss"
import Background from '../../component/background/background.component'
import "../login/login.styles.scss"
import Header from '../../component/header/header.compoent'
import axios from 'axios'
export default class ForgotPassword extends Component {

    handleSubmit = e => {
        e.preventDefault()

        const data ={
            email: this.email
        }
        axios.post("auth/forgot",data).then(
            res=> {
                console.log(res)
            }
        ).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <>
            <Background />
            <Header />
            <div className="form-container">
                
            <form onSubmit={this.handleSubmit} className="login-form">

                <h3 className="header-text"> Reset your Password</h3>

                <p className="login-text"> Enter your verified Email address and we”ll send you <br/> a link to reset your password.</p>
                <div className="form-input">
                    
                    <input type = "mail" className="" placeholder="Email Address" onChange={e => this.email = e.target.value}/>
                    
                </div>

                <div className="button-container">
                <button className="login-button">Request</button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            </div>
            </>

        )
    }
}
