import { useHistory } from "react-router-dom";
import GoBackHeader from "../components/_shared/GoBackHeader/GoBackHeader";

export default function BalancePage({ costs, incomes }) {
  const { push } = useHistory();

  const handleGoBack = () => push("/");

  return (
    <>
      <GoBackHeader title="Balance" handleGoBack={handleGoBack} />
      <ul>
        {[...costs, ...incomes].map(
          ({ day, time, category, sum, currency, id }) => (
            <li key={id}>
              <span>{day}</span>
              <span>{time}</span>
              <span>{category}</span>
              <span>{sum}</span>
              <span>{currency}</span>
            </li>
          )
        )}
      </ul>
    </>
  );
}
