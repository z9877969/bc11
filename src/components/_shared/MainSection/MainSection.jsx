import s from "./MainSection.module.css";

const MainSection = ({ children, title }) => {
  return (
    <section className={s.section}>
      {title && <h1 className={s.title}>{title}</h1>}
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default MainSection;
