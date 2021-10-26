const MainInfo = ({ title, btnTitle, options }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>UAH</p>
      <button type="button">{btnTitle}</button>
      <ul>
        {options.map(({ name, period, sum }) => (
          <li key={name}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainInfo;
