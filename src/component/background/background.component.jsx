import React, { Component } from 'react'
import "./background.styles.scss"
import bg1 from "../../assets/bg-1.svg"
import bg2 from "../../assets/bg-2.svg"
import header from "../../assets/header.svg"

export default class Background extends Component {
    render() {
        return (
            <>
                <div className="shape1">
                <img src={bg1}></img>
                </div>
                <div className="shape2">
                <img src={bg2}></img>
                </div>
                <div className="form-container">
                <div className="header-container">
                    <h1 className="title"><img src={header}></img></h1>
                    </div>
                    </div>
            </>
        )
    }
}
