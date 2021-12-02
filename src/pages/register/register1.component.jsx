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

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
    //         form1:{
    //         name: this.name,
    //         id: this.id,
    //         gender:this.gender,
    //         date: this.date,
    //         email : this.email,
    //         contact:this.contact,
    //         address:this.address,
    //         emergencyno:this.emergencyno,
    //         relation:this.relation,
    //         iamge1: this.image
    //         }
            
            
    //     }

    //     console.log("name" + this.name)
    //     console.log("file" + this.file)
    //     console.log("datas are" + data)
    //     axios.post("register/employee/",data).then(
    //         res=> {
                
    //             console.log(res);
    //             console.log("datas are" + data)
    //         }
    //     ).catch(
    //         err=>{
    //             console.log(err);
    //             console.log("datas are" + data)
    //         }
    //     )
    //     console.log(data);
        



    render() {
        //   const { 
        //    name, 
        //    status, 
        //    active} = this.state;
           const { values, inputChange, file,photoUpload , imagePreviewUrl } = this.props;


        return (
            <>
            <Background />
            <Header/>
            <div className="register-form-container">
                
            <form class="register-form">
                           
            
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
                        <input type = "text" className="" placeholder="Full Name*" required name="name" onChange={inputChange('name')} value={values.name}/>
                    </div>
                    <div className="form-input2 col-small"> 
                        <input type = "number" className="" placeholder="ID*" required name="id" onChange={inputChange('id')} value={values.id}/>
                        </div>




                        <div className="form-input2 col-small"> 
                        <select name="gender" onChange={inputChange('gender')} value={values.gender}>
                        <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        </div>

                        <div className="form-input2 col-md"> 
                        <input type="text" onFocus={ (e)=> { e.currentTarget.type = "date"; 
                                                            e.currentTarget.focus();
                                                        }} placeholder="Date of Birth" name="date" onChange={inputChange('date')} value={values.date} />

                        </div> 
                    
                </div>

                    <div className="secondPart">
                <div className="form-title">
                        <h3 className="formTitle">Contact Details</h3>
                    </div>                                                     
                <div className="form-wrapper">
                    
                    <div className="form-input2 col-big">    
                        <input type = "email" className="" placeholder="Email Address*" required name="email" onChange={inputChange('email')} value={values.email}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Contact Number*" required name="number" onChange={inputChange('number')} value={values.number}/>
                        </div>

                        <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Address*" required name="address" onChange={inputChange('address')} value={values.address}/>
                        </div>

                        
                        <div className="form-input2 col-md"> 
                        <input type = "number" className="" placeholder="Emergency No." required name="emergencyno" onChange={inputChange('emergencyno')} value={values.emergencyno}/>
                        </div>

                        
                        <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Relation" required name="relation" onChange={inputChange('relation')} value={values.relation}/>
                        </div>


                    
                </div>
                </div>

                <div className="form-input2 col-md">                           
                        <div class="image-upload">
                            <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
                        </div>
                        </div>


                        


                <div class="button-container">
                <button onClick={this.continue} className="login-button">Next</button>
                <button className="login-button-2">Cancel</button>
                </div>
                
            </form>
            
            </div>
    </>
        )
    }
}
