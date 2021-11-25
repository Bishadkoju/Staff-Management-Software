import React, { Component } from 'react'
import axios from 'axios'
import Background from '../../component/background/background.component'
import Header from '../../component/header/header.compoent'
import {Link} from "react-router-dom"
import image1 from "../../assets/profile.svg"
import image2 from "../../assets/citizenship.svg"
import register1 from "../../assets/registration2.svg"

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

      state = {
        file: '',
        imagePreviewUrl: image1,
        imagePreviewUrl2: image2
      }
    
      photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            imagePreviewUrl2: reader.result
          });
        }
        reader.readAsDataURL(file);
      }

      


    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email:this.email,
            password: this.password,
            password_confirm : this.confirmPassword
            
        }
        axios.post("http://localhost:8000/register",data).then(
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
          const {imagePreviewUrl, 
           name, 
           status, 
           active} = this.state;
        return (
            <>
            <Background />
            <Header/>
            <div className="register-form-container">
                
            <form onSubmit={this.handleSubmit} class="register-form">
                           
            
                <div class="register-top-header">
                <h3 className="header-text bigfont"> Register 2</h3>
                <p className="login-text marginup smallfont"> Get access to the management <br/> tool by loggin in</p>
                </div>
                <div className="registerOrder marginup">
                    <img src={register1} className="registerImage"></img>
                </div>
                    <div className="form-title">
                        <h3 className="formTitle">General Details</h3>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="Father's Name*" required onChange={e => this.name = e.target.value}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Mother's Name*" required onChange={e => this.name = e.target.value}/>
                        </div>
                        <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="Marital Status*" required onChange={e => this.name = e.target.value}/>
                    </div>
                    <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="Education Status*" required onChange={e => this.name = e.target.value}/>
                    </div>

                    
                </div>

                    <div className="secondPart">
                <div className="form-title">
                        <h3 className="formTitle">Document Details</h3>
                    </div>                                                     
                <div className="form-wrapper">
                    
                    <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="PAN No*" required onChange={e => this.name = e.target.value}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Bank Account Number*" required onChange={e => this.name = e.target.value}/>
                        </div>

                        <div className="form-input2 col-md image2">                           
                            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
                        </div>

                        <div className="form-input2 col-md image3">                           
                            <ImgUpload className="image" onChange={this.photoUpload} src={imagePreviewUrl}/>
                        </div>


                    
                </div>
                </div>



                        


                <div class="button-container">
                <button onChange={this.handleSubmit} className="login-button"><Link  className="forgot-text"to ={"/register3"}>Next</Link></button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            
            </div>
    </>
        )
    }
}
