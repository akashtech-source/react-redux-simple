// we need to create our store here. after setting actions and reducers, then wrap in index.js file using provider via react-redux

import { createStore } from "redux";
import { cartReducer } from "../reducers/cartReducer";

export const store = createStore(cartReducer);
