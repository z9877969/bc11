import PropTypes from "prop-types";
import MainInfo from "../../MainInfo/MainInfo";
import StatisticsBtns from "../../StatisticsBtns/StatisticsBtns";
import MainSection from "../../_shared/MainSection/MainSection";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../../assets/options/mainInfoOpts.json";
import { useContext } from "react";
import { baseContext } from "../../../context/BaseProvider";

const MainPage = () => {
  const { handleTogglePage } = useContext(baseContext);
  return (
    <MainSection title="Журнал расходов">
      <MainInfo
        handleOpenPageFromMain={handleTogglePage}
        btnIcon="icon-plus"
        options={mainInfoCosts}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        btnIcon="icon-plus"
        options={mainInfoIncomes}
        title="Доходы"
        activePage="incomes"
        handleOpenPageFromMain={handleTogglePage}
      />
      <MainInfo
        btnIcon="icon-navigation-more"
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
        handleOpenPageFromMain={handleTogglePage}
      />
      <StatisticsBtns />
    </MainSection>
  );
};

export default MainPage;
