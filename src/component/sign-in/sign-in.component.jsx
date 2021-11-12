import React from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
// import {auth, signInWithGoogle} from "../../firebase/firebase.utils"
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            phone:"",
            password: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {phone, password} = this.state
        try{
            // await auth.signInWithEmailAndPassword(email, password)
            this.setState({phone:"", password:""})
            console.log(phone, password)
        }
        catch(err){
            console.log(err);
        }

        
    }

    handleChange = event => {

        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in-container">
            <div className="sign-in">
                <div className="user-image-container">
                    <img className="user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU" />
                </div>
                <h1 className="title"> Staff Management System</h1>
                <span>Sign in with your phone and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="phone" type="phone" label="Phone Number" value={this.state.phone} handleChange={this.handleChange} required />
                    
                    <FormInput name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In </CustomButton>

                    </div> 
                    <span> Don't have a account yet ! <button style={{border: "none", background: "none", color: "red", textDecoration: "underline"}}> Create</button></span>
                    
                </form>
            </div>
            </div>
        )
    }
}

export default SignIn;