import "./form-input.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-lable`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
