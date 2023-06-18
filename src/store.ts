import { combineReducers, createStore } from "redux";
import { GameReducer } from "./reducers";

const reducers = combineReducers({
  GameReducer
});

const store = createStore(reducers);

export default store;
