import sprite from "../../../assets/icons/sprite.svg";
const Button = ({
  type = "button",
  title,
  spritePath = sprite,
  iconId,
  name,
  className,
  cbOnClick,
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
