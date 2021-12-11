import React, { Component } from 'react'
import Background from "../../component/background/background.component"
import "../login/login.styles.scss"
import "./reset.styles.scss"
import {Navigate} from "react-router"
import ResetHeader from "../../assets/reset.svg"
import Header from '../../component/header/header.compoent'
import axios from 'axios'
export default class Reset extends Component {
    state={}

    handleSubmit = e => {
        e.preventDefault()

        const data = {
            token:this.props.match.params.id,
            password: this.password,
            password_confirm: this.confirmPassword

        }

        axios.post("auth/reset",data).then(
            res=>{
                console.log(res)
                this.setState({
                    reset: true
                })
            }
        ).catch(
            err=>{
                console.log(err)
            })

    }
    cancel = () =>{

    }
    render() {
        if (this.state.reset){
            return <Navigate to={"/login" }/>
        }
        return (
            <>
            <Background />
            <Header />
            <div className="form-container">
                
            <form onSubmit={this.handleSubmit} class="login-form">
                           
                <div class="reset-image-container">
                <img src = {ResetHeader} className="imageReset"></ img>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                
                <h3 className="header-text"> Welcome</h3>

                <p className="login-text"> You must change your password <br/> to get access</p>
                <div className="form-input">
                    
                    <input type = "password" className="" placeholder="New Password" onChange={e => this.password = e.target.value}/>
                    
                    <input type = "password" className="" placeholder="Confirm New Password" onChange={e => this.confirmPassword = e.target.value}/>
                </div>

                <div class="button-container">
                <button className="login-button">Submit</button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            </div>
            </>
        )
    }
}
