import { createAction } from "@reduxjs/toolkit";

// const [incomes, setIncomes] = useState([]);
// const [costs, setCosts] = useState([]);

export const addIncomes = createAction("transactions/addIncomes");
export const addCosts = createAction("transactions/addCosts");
export const getIncomes = createAction("transactions/getIncomes");
export const getCosts = createAction("transactions/getCosts");
