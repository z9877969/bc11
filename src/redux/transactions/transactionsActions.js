import { createAction } from "@reduxjs/toolkit";

// const [incomes, setIncomes] = useState([]);
// const [costs, setCosts] = useState([]);

export const getIncomes = createAction("transactions/getIncomes");
export const getCosts = createAction("transactions/getCosts");

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");


// const action = (prop) => ({
//     type: "type",
//     payload: prop // 
// })

// const createACtion = (type) => (prop) => ({
//     type,
//     payload: prop // 
// })