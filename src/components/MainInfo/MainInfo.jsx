import PropTypes from "prop-types";
import sprite from "../../assets/icons/sprite.svg";
import s from "./MainInfo.module.css";

const MainInfo = ({
  title,
  btnIcon,
  options,
  handleOpenPageFromMain,
  activePage,
}) => {
  return (
    <section className={s.section}>
      <div className={s.mainWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.currency}>UAH</p>
        </div>
        <ul className={s.list}>
          {options.map(({ name, period, sum }) => (
            <li className={s.item} key={name}>
              <span className={s.period}>{period}</span>
              <span className={s.sum}>{sum}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={s.btn}
        type="button"
        onClick={() => {
          handleOpenPageFromMain(activePage);
        }}
      >
        <svg>
          <use href={sprite + "#" + btnIcon}></use>
        </svg>
      </button>
    </section>
  );
};

MainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  btnIcon: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleOpenPageFromMain: PropTypes.func.isRequired,
};

export default MainInfo;
