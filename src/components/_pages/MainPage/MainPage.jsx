import MainInfo from "../../MainInfo/MainInfo";
import StatisticsBtns from "../../StatisticsBtns/StatisticsBtns";
import MainSection from "../../_shared/MainSection/MainSection";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../../assets/options/mainInfoOpts.json";

const MainPage = () => {
  return (
    <MainSection title="Журнал расходов">
      <MainInfo btnIcon="icon-plus" options={mainInfoCosts} title="Расходы" />
      <MainInfo btnIcon="icon-plus" options={mainInfoIncomes} title="Доходы" />
      <MainInfo
        btnIcon="icon-navigation-more"
        options={mainInfoBalance}
        title="Баланс"
      />
      <StatisticsBtns />
    </MainSection>
  );
};

export default MainPage;
