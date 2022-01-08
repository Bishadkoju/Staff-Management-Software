const ImgUpload = ({ name, register, label, onChange, src, errors }) => (
  <div>
    {label}
    <input {...register(name)} type="file" onChange={onChange} />
    <img src={src} className="img-wrap" />
    {errors}
  </div>
);

export default ImgUpload;
