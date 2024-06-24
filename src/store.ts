import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { boxReducer, gameReducer, gridSizeReducer, originReducer } from './reducers';

const reducers = combineReducers({
  gameState: gameReducer,
  boxState: boxReducer,
  originState: originReducer,
  gridState: gridSizeReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
