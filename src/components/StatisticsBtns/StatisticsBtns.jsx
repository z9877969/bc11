import { useHistory } from "react-router-dom";
import Button from "../_shared/Button/Button";
import styles from "./StatisticsBtns.module.css";

const StatisticsBtns = () => {
  const { push, location } = useHistory();
  const getNextLocation = (pathName) => ({
    pathname: pathName,
    state: {
      from: location,
    },
  });
  const openCostsHistory = () => {
    push(getNextLocation("/history/costs"));
  };

  const openIncomesHistory = () => {
    push(getNextLocation("/history/incomes"));
  };
  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        name="allCosts"
        title="Все расходы"
        cbOnClick={openCostsHistory}
      />
      <Button
        className={styles.button}
        name="allIncomes"
        title="Все доходы"
        cbOnClick={openIncomesHistory}
      />
    </div>
  );
};

export default StatisticsBtns;
