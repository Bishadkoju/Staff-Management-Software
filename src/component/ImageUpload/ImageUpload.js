  const ImgUpload = ({ name, label, onChange, src }) => (
    <div>
      {label}
    <input name={name} type="file" onChange={onChange} />
    <img src={src} className="img-wrap"  />
    </div>
  );

  export default ImgUpload
  