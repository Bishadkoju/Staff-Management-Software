import React, { Component } from 'react';
import Register1 from "./register1.component"
import Register2 from "./register2.component"
import Register3 from "./register3.component"
import image1 from "../../assets/profile.svg"
import image2 from "../../assets/contract.svg"
import image3 from "../../assets/citizenship.svg"
import axios from 'axios';
import Login from '../login/login.component';



export class Form extends Component {
    state = {
        step: 1,

        file: '',
        file2:"",
        file3:"",
        imagePreviewUrl: image1,
        imagePreviewUrl2: image2,
        imagePreviewUrl3: image3,

        name: "",
        id: "",
        gender:"",
        date: "",
        email : "",
        contact:"",
        address:"",
        emergencyno:"",
        relation:"",
        

        role:"",
        store:"",
        startdate:"",
        enddate:"",

        fathername: "",
        mothername: "",
        marital:"",
        education: "",
        pan : "",
        bank:"",
        
    };

    // photoUpload = e =>{
    //     e.preventDefault();
    //     console.log("run")
    //     const reader = new FileReader();
    //     const file = e.target.files[0];
    //     reader.onloadend = () => {
    //       this.setState({
    //         file: file,
    //         imagePreviewUrl: reader.result
    //       });
    //     }
    //     console.log(file)
    //     // console.log(imagePreviewUrl)
    //     reader.readAsDataURL(file);
    //   }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    formSubmit = () => {
        const data=this.state
        console.log("console form data")
        console.log(data)

        const config = {
            headers:{
                Authorization: "Token "+ "6677ebfbe105a8bbbbdd74dd9030309e1d0b7033"
            }
        }

        axios.post("register/employee/",config, data).then(
            res=> {
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        // console.log(data);
    }

    
    

    render() {
        const { step } = this.state;
        const {  name,id,gender, date, email , contact, address,
            emergencyno, relation, role, 
            store, startdate,enddate, fathername, mothername,
            marital, education,pan ,bank } = this.state;
            

        const values = { name,id,gender, date, email, contact, address,
            emergencyno, relation, role, 
            store, startdate,enddate, fathername, mothername,
            marital, education,pan ,bank };

        switch (step) {
            case 1:
                return (
                    <Register1
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                        // file={this.state.file}
                        // photoUpload={this.photoUpload}
                        imagePreviewUrl={this.state.imagePreviewUrl}
                    />
                );
            case 2:
                return (
                    <Register2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        imagePreviewUrl2={this.state.imagePreviewUrl3}
                        imagePreviewUrl3={this.state.imagePreviewUrl3}
                    />
                );
            case 3:
                return (
                    <Register3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        formSubmit={this.formSubmit}
                    />
                );
                   
                 
            //    case 4:
            //        return(
            //     <Success
            // />)
          
        }
        console.log("worked")
        console.log(this.state)
        
    }
}

export default Form