import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import LoginPageReducer from './LoginPage';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    LoginPageReducer,
  });

export default reducers;
