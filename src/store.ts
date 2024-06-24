import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { boxReducer, gameReducer } from './reducers';

const reducers = combineReducers({
  gameState: gameReducer,
  boxState: boxReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
