import { combineReducers, createStore } from "redux";
import { gameReducer } from "./reducers";

const reducers = combineReducers({
  gameState: gameReducer
});

const store = createStore(reducers);

export default store;
