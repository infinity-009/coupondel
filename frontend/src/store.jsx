import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer.js";
import couponReducer from "./reducers/couponReducer.js";
import orderReducer from "./reducers/orderReducer.js";

const reducer = combineReducers({
    app: appReducer,
    coupon: couponReducer,
    order: orderReducer,
});

const store = configureStore({
  reducer,
});

export default store;
