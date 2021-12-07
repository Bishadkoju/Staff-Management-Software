import React, { Component } from 'react'
import axios from 'axios'
import Background from '../../component/background/background.component'
import Header from '../../component/header/header.compoent'
import {Link} from "react-router-dom"
import image1 from "../../assets/profile.svg"
import register3 from "../../assets/registration3.svg"

import "./register.styles.scss"

const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  


export default class Register extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
};
 
back = e => {
  e.preventDefault();
  this.props.prevStep();
};

register = e => {
  e.preventDefault();
  this.props.formSubmit();
};

    
      photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file);
      }

      


    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const data = {
    //         form3:{
    //         fathername: this.role,
    //         mothername: this.store,
    //         marital:this.startDate,
    //         education: this.endDate,
    //         }
    
            
    //     }
        // axios.post("localhost:8000/api/v1/auth/register/employee/",data).then(
        //     res=> {
        //         console.log(res);
        //     }
        // ).catch(
        //     err=>{
        //         console.log(err);
        //     }
        // )
        // console.log(data);
    



    render() {
    

           const { values, inputChange } = this.props;
           
           

        return (
            <>
            <Background />
            <Header/>

            <div className="register-form-container">
                
            <form  class="register-form">
                           
            
                <div class="register-top-header">
                <h3 className="header-text bigfont"> Register</h3>
                <p className="login-text marginup smallfont"> Get access to the management <br/> tool by loggin in</p>
                </div>
                <div className="registerOrder marginup">
                    <img src={register3} className="registerImage"></img>
                </div>
                    <div className="form-title">
                        <h3 className="formTitle">Management Details</h3>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="form-input2 col-big"> 
                        <select name="role" onChange={inputChange('role')} value={values.role}>
                            <option value="">Roles</option>
                            <option value="gm">General Manager</option>
                            <option value="sm">Store Manager</option>
                            <option value="employee">Employee</option>
                        </select>
                        </div>

               

                    <div className="form-input2 col-big">    
                        <input type = "text" className="" placeholder="Store*"  name="store" onChange={inputChange('store')} value={values.store}/>
                    </div>


                        <div className="form-input2 col-big"> 
                        <input type="text" onFocus={ (e)=> { e.currentTarget.type = "date"; 
                                                            e.currentTarget.focus();
                                                        }} placeholder="Starting Date*" name="startdate" onChange={inputChange('startdate')} value={values.startdate}/>

                        </div> 
                        <div className="form-input2 col-big"> 
                        <input type="text" onFocus={ (e)=> { e.currentTarget.type = "date"; 
                                                            e.currentTarget.focus();
                                                        }} placeholder="Termination Date*" name="enddate" onChange={inputChange('enddate')} value={values.enddate} />

                        </div> 
                    
                </div>



    
                        


                <div class="button-container">
                <button onClick={this.register} className="login-button"><Link  className="forgot-text"to ={"/login"}>Finish</Link></button>
                <button onClick={this.props.prevStep} className="login-button-2">Back</button>
                </div>
                
            </form>
            
            </div>
    </>
        )
    }
}
