import sprite from "../../assets/icons/sprite.svg";
import s from "./MainInfo.module.css";

const MainInfo = ({ title, btnIcon, options }) => {
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
      <button className={s.btn} type="button">
        <svg>
          <use href={sprite + "#" + btnIcon}></use>
        </svg>
      </button>
    </section>
  );
};

export default MainInfo;
