const Button = ({
  type = "button",
  title,
  spritePath,
  iconId,
  name,
  className,
  cbOnClick
}) => (
  <button
    className={`button ${className && className}`}
    name={name}
    type={type}
    onClick={cbOnClick}
  >
    {title ? (
      title
    ) : (
      <svg>
        <use href={spritePath + "#" + iconId}></use>
      </svg>
    )}
  </button>
);

export default Button;
