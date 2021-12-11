
const ImageUpload = ({ name, onChange, src }) => (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        <img for="photo-upload" src={src} />
      </div>
      <input name={name} type="file" onChange={onChange} />
    </label>
  );

  const ImgUpload = ({ name, onChange, src }) => (
    <div>
      {name}
    <input name={name} type="file" onChange={onChange} />
    </div>
  );

  export default ImgUpload
  