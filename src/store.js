/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
export const history = createBrowserHistory();

let store;

export default () => {
  if (store) {
    return store;
  }
  const initialState = {};
  const enhancers = [];
  const middleware = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
  store = createStore(rootReducer(history), initialState, composedEnhancers);

  return store;
};
