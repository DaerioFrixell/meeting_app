import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { unitReducer } from '../model/unitReducer';
// import { UnusReducer } from '../../model/unusReducer';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const rootReducer = combineReducers({
  unit: unitReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>
export default store;