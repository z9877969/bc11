const LabelInput = ({
  type = "text",
  title,
  placeholder,
  name,
  defaultValue,
  cbOnClick,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={defaultValue}
        onClick={cbOnClick}
      />
    </label>
  );
};

export default LabelInput;
