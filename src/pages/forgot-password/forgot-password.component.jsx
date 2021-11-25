import React, { Component } from 'react'
import "../../pages/login/login.styles.scss"
import Background from '../../component/background/background.component'
import "../login/login.styles.scss"
import Header from '../../component/header/header.compoent'
export default class ForgotPassword extends Component {

    handleSubmit = e => {
        e.preventDefault()
    }
    render() {
        return (
            <>
            <Background />
            <Header />
            <div className="form-container">
                
            <form onSubmit={this.handleSubmit} class="login-form">

                <h3 className="header-text"> Reset your Password</h3>

                <p className="login-text"> Enter your verified Email address and we”ll send you <br/> a link to reset your password.</p>
                <div className="form-input">
                    
                    <input type = "mail" className="" placeholder="Email Address" onChange={e => this.email = e.target.value}/>
                    
                </div>

                <div class="button-container">
                <button className="login-button">Request</button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            </div>
            </>

        )
    }
}
