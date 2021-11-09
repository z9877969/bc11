import PropTypes from "prop-types";
import MainInfo from "../../MainInfo/MainInfo";
import StatisticsBtns from "../../StatisticsBtns/StatisticsBtns";
import MainSection from "../../_shared/MainSection/MainSection";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../../assets/options/mainInfoOpts.json";
import { useHistory } from "react-router-dom";

const MainPage = () => {

  const { push } = useHistory();

  const openActivePage = (activePage) => {
    const pathName = activePage === 'balance' ? '/balance' : `/transaction/${activePage}`;
    push(pathName)
  };

  return (
    <MainSection title="Журнал расходов">
      <MainInfo
        handleOpenPageFromMain={openActivePage}
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
        handleOpenPageFromMain={openActivePage}
      />
      <MainInfo
        btnIcon="icon-navigation-more"
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
        handleOpenPageFromMain={openActivePage}
      />
      <StatisticsBtns />
    </MainSection>
  );
};

export default MainPage;
