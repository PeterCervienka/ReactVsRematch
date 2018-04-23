import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../reducers';

const reducer = combineReducers({
  ...reducers,
});

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export const store = finalCreateStore(reducer);

