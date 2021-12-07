import React, { Component } from 'react'
import "./dashboard.styles.scss"
import Background from '../../component/background/background.component'
import "../login/login.styles.scss"
import Header from '../../component/header/header.compoent'
import axios from 'axios'


const Dashboard = (props) => {
    const a = 'abcs' 
    console.clear()
    console.log(props)
    return (
        <div className="container">
            
        Hello dashboard
        </div>
    )
}

export default Dashboard