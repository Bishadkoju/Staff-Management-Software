import React, { Component } from 'react';
import "./try.scss"
export class Try extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    profileImg2: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg2: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg, profileImg2} = this.state
		return (
            <>
			<div className="page">
				<div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>
			</div>

<div className="page">
<div className="container">
    <h1 className="heading">Add your Image</h1>
    <div className="img-holder">
        <img src={profileImg2} alt="" id="img" className="img" />
    </div>
    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler2} />
    <div className="label">
<label className="image-upload" htmlFor="input">
        <i className="material-icons">add_photo_alternate</i>
        Choose your Photo
    </label>
</div>
</div>
</div>
</>
		);
	}
}

export default Try;