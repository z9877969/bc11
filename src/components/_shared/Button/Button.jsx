const Button = ({ type = "button", title, spritePath, iconId, name }) => (
  <button name={name} type={type}>
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
