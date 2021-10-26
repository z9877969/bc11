import MainInfo from "../../MainInfo/MainInfo";
import StatisticsBtns from "../../StatisticsBtns/StatisticsBtns";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../../assets/options/mainInfoOpts.json";

const MainPage = () => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo btnTitle={"Add"} options={mainInfoCosts} title="Расходы" />
      <MainInfo btnTitle={"Add"} options={mainInfoIncomes} title="Доходы" />
      <MainInfo btnTitle={"Show"} options={mainInfoBalance} title="Баланс" />
      <StatisticsBtns />
    </>
  );
};

export default MainPage;
