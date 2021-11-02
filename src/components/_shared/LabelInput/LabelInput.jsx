const LabelInput = ({
  type = "text",
  title,
  placeholder,
  name,
  value,
  cbOnClick = null,
  cbOnChange = null,
  checked = null,
}) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onClick={cbOnClick}
        // onFocus={() => console.log("focus")}
        onChange={cbOnChange}
        checked={ checked}
      />
    </label>
  );
};

export default LabelInput;
