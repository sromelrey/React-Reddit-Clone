import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomePageReducer from './HomePageReducer';
import SubmissionPageReducer from './SubmissionPageReducer';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    HomePageReducer,
    SubmissionPageReducer,
  });

export default reducers;
