import { useHistory } from "react-router-dom";
import MainInfo from "../components/MainInfo/MainInfo";
import StatisticsBtns from "../components/StatisticsBtns/StatisticsBtns";
import MainSection from "../components/_shared/MainSection/MainSection";
import {
  mainInfoCosts,
  mainInfoIncomes,
  mainInfoBalance,
} from "../assets/options/mainInfoOpts.json";

const MainPage = () => {
  const { push, location } = useHistory();

  const openActivePage = (activePage) => {
    const pathName =
      activePage === "balance" ? "/balance" : `/transaction/${activePage}`;

    const nextLocation = {
      pathname: pathName,
      state: {
        from: location,
      },
    };
    push(nextLocation);
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
