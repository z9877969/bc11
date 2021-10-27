import Button from "../_shared/Button/Button";
import styles from "./StatisticsBtns.module.css";

const StatisticsBtns = () => {
  return (
    <div className={styles.container}>
      <Button className={styles.button} name="allCosts" title="Все расходы" />
      <Button className={styles.button} name="allIncomes" title="Все доходы" />
    </div>
  );
};

export default StatisticsBtns;
