import React, { Component } from 'react'
import axios from 'axios'
import Background from '../../component/background/background.component'
import Header from '../../component/header/header.compoent'
import {Link} from "react-router-dom"
import image1 from "../../assets/profile.svg"
import image2 from "../../assets/citizenship.svg"
import image3 from "../../assets/contract.svg"
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
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
};
 
back = e => {
  e.preventDefault();
  this.props.prevStep();
};
      

      photoUpload2 = e =>{
        e.preventDefault();
        const reader2 = new FileReader();
        
        const file2 = e.target.files[0];
        
        reader2.onloadend = () => {
          this.setState({
            
            file2: file2,
 
            imagePreviewUrl2: reader2.result,
  
          });
        }
        reader2.readAsDataURL(file2);
       
      }

      photoUpload3 = e =>{
        e.preventDefault();
        const reader3 = new FileReader();
        
        const file3 = e.target.files[0];
        
        reader3.onloadend = () => {
          this.setState({
            
            file3: file3,
 
            imagePreviewUrl3: reader3.result,
  
          });
        }
        reader3.readAsDataURL(file3);
       
      }

      


      // handleSubmit = (event) => {
      //   event.preventDefault()
      //   const data = {
      //     form2:{
      //       fathername: this.fathername,
      //       mothername: this.mothername,
      //       marital:this.marital,
      //       education: this.education,
      //       pan : this.pan,
      //       blank:this.bank,
      //       address:this.address,
      //       image2:this.imagePreviewUrl2,
      //       image3:this.imagePreviewUrl3,
      //     }
        
            
      //   }
    //     axios.post("localhost:8000/api/v1/auth/register/employee/",data).then(
    //         res=> {
    //             console.log(res);
    //         }
    //     ).catch(
    //         err=>{
    //             console.log(err);
    //         }
    //     )
    //     // console.log(data);
      



    render() {
          // const {
          //  name, 
          //  status, 
          //  active} = this.state;

           const { values, inputChange, imagePreviewUrl2, imagePreviewUrl3 } = this.props;

        //    const {
        //     values: { name, email, phone, password, facebook, twitter, github }
        // } = this.props;

        return (
            <>
            <Background />
            <Header/>
            <div className="register-form-container">
                
            <form  class="register-form">
                           
            
                <div class="register-top-header">
                <h3 className="header-text bigfont marginup-lg"> Register</h3>
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
                        <input type = "text" className="" placeholder="Father's Name*" required name="fathername" onChange={inputChange('fathername')} value={values.fathername}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Mother's Name*" required name="mothername" onChange={inputChange('mothername')} value={values.mothername}/>
                        </div>
                        <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="Marital Status*" required name="marital" onChange={inputChange('marital')} value={values.marital}/>
                    </div>
                    <div className="form-input2 col-big">    
                        <input type = "text" className="" placeholder="Education Status*" required name="education" onChange={inputChange('education')} value={values.education}/>
                    </div>

                    
                </div>

                    <div className="secondPart">
                <div className="form-title">
                        <h3 className="formTitle">Document Details</h3>
                    </div>                                                     
                <div className="form-wrapper">
                    
                    <div className="form-input2 col-md">    
                        <input type = "text" className="" placeholder="PAN No*" required name="pan" onChange={inputChange('pan')} value={values.pan}/>
                    </div>
                    <div className="form-input2 col-md"> 
                        <input type = "text" className="" placeholder="Bank Account Number*" name="bank" onChange={inputChange('bank')} value={values.bank}/>
                        </div>

                        <div className="form-input2 col-md image3">                           
                            <ImgUpload onChange={this.photoUpload2} src={imagePreviewUrl2}/>

                            <ImgUpload  onChange={this.photoUpload3} src={imagePreviewUrl3}/>
                        </div>

                        <div className="form-input2 col-md image3">                           
                        </div>


                    
                </div>
                </div>



                        


                <div class="button-container buttonRegister2">
                <button onClick={this.continue} className="login-button">Next</button>
                <button onClick={this.back} className="login-button-2">Back</button>
                </div>
                
            </form>
            
            </div>
    </>
        )
    }
}
