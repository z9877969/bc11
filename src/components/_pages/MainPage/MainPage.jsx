import PropTypes from "prop-types";
import MainInfo from "../../MainInfo/MainInfo";
import StatisticsBtns from "../../StatisticsBtns/StatisticsBtns";
import MainSection from "../../_shared/MainSection/MainSection";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../../../assets/options/mainInfoOpts.json";

const MainPage = ({ handleOpenPageFromApp }) => {
  return (
    <MainSection title="Журнал расходов">
      <MainInfo
        handleOpenPageFromMain={handleOpenPageFromApp}
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
        handleOpenPageFromMain={handleOpenPageFromApp}
      />
      <MainInfo
        btnIcon="icon-navigation-more"
        options={mainInfoBalance}
        title="Баланс"
        activePage="balance"
        handleOpenPageFromMain={handleOpenPageFromApp}
      />
      <StatisticsBtns />
    </MainSection>
  );
};

MainPage.propTypes = {
  handleOpenPageFromApp: PropTypes.func.isRequired,
};

export default MainPage;
