import React, { Component } from 'react'
import axios from 'axios'
import Background from '../../component/background/background.component'
import Header from '../../component/header/header.compoent'
import {Link} from "react-router-dom"
import image1 from "../../assets/profile.svg"
import register1 from "../../assets/register1.svg"

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
        imagePreviewUrl: image1
      }
    
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

      


    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            form1:{
            name: this.name,
            id: this.id,
            gender:this.gender,
            date: this.date,
            email : this.email,
            contact:this.contact,
            address:this.address,
            emergencyno:this.emergencyno,
            relation:this.relation,
            iamge1: this.imagePreviewUrl
            }
        
            
        }
        console.log("datas are" + data)
        axios.post("register/employee/",data).then(
            res=> {
                console.log(res);
                console.log("datas are" + data)
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
                <h3 className="header-text bigfont"> Register</h3>
                <p className="login-text marginup smallfont"> Get access to the management <br/> tool by loggin in</p>
                </div>
                <div className="registerOrder marginup">
                    <img src={register1} className="registerImage"></img>
                </div>
                    <div className="form-title">
                        <h3 className="formTitle">Personal Details</h3>
                    </div>
                    <div className="form-wrapper">
                    
                    <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="Full Name*" required onChange={e => this.name = e.target.value}/>
                    </div>
                    <div className="form-input2 col-small"> 
                        <input type = "number" className="" placeholder="ID*" required onChange={e => this.id = e.target.value}/>
                        </div>




                        <div className="form-input2 col-small"> 
                        <select name="Gender" onChange={e => this.gender = e.target.value}>
                        <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        </div>

                        <div className="form-input2 col-md"> 
                        <input type="text" onFocus={ (e)=> { e.currentTarget.type = "date"; 
                                                            e.currentTarget.focus();
                                                        }} placeholder="Date of Birth" onChange={e => this.date = e.target.value} />

                        </div> 
                    
                </div>

                    <div className="secondPart">
                <div className="form-title">
                        <h3 className="formTitle">Contact Details</h3>
                    </div>                                                     
                <div className="form-wrapper">
                    
                    <div className="form-input2 col-big">    
                        <input type = "email" className="" placeholder="Email Address*" required onChange={e => this.email = e.target.value}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Contact Number*" required onChange={e => this.number = e.target.value}/>
                        </div>

                        <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Address*" required onChange={e => this.address = e.target.value}/>
                        </div>

                        
                        <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Emergency No." required onChange={e => this.emergencyno = e.target.value}/>
                        </div>

                        
                        <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Relation" required onChange={e => this.relation = e.target.value}/>
                        </div>


                    
                </div>
                </div>

                <div className="form-input2 col-md">                           
                        <div class="image-upload">
                            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
                        </div>
                        </div>


                        


                <div class="button-container">
                <button onClick={this.handleSubmit} className="login-button"><Link  className="forgot-text"to ={"/register2"}>Next</Link></button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            
            </div>
    </>
        )
    }
}
