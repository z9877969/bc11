const Button = ({
  type = "button",
  title,
  spritePath,
  iconId,
  name,
  className,
}) => (
  <button
    className={`button ${className && className}`}
    name={name}
    type={type}
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
