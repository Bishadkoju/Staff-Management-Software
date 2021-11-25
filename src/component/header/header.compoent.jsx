import React, { Component } from 'react'
import header from "../../assets/header.svg"
import "./header.styles.scss"
export default class Header extends Component {
    render() {
        return (
            <div className="form-container">
            <div className="header-container">
                <h1 className="title"><img className="headerImage" src={header}></img></h1>
                </div>
                </div>
        )
    }
}

