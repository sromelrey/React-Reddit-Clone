import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  error: null,
  isFetchingHotPosts: false,
  isFetchingBestPosts: false,
  isFetchingNewPosts: false,
  isFetchingTopPosts: false,
  hot_formated: [],
  best_formated: [],
  new_post_formated: [],
  top_formated: [],
};

export default function HomePageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_HOT_POST_REQUEST:
      return {
        ...state,
        isFetchingHotPosts: true,
      };
    case ActionTypes.GET_HOT_POST_SUCCESS:
      return {
        ...state,
        isFetchingHotPosts: false,
        hot_formated: payload.hot_formated,
      };
    case ActionTypes.GET_BEST_POST_REQUEST:
      return {
        ...state,
        isFetchingBestPosts: true,
      };
    case ActionTypes.GET_BEST_POST_SUCCESS:
      return {
        ...state,
        isFetchingBestPosts: false,
        best_formated: payload.best_formated,
      };
    case ActionTypes.GET_NEW_POST_REQUEST:
      return {
        ...state,
        isFetchingNewPosts: true,
      };
    case ActionTypes.GET_NEW_POST_SUCCESS:
      return {
        ...state,
        isFetchingNewPosts: false,
        new_post_formated: payload.new_post_formated,
      };
    case ActionTypes.GET_TOP_POST_REQUEST:
      return {
        ...state,
        isFetchingTopPosts: true,
      };
    case ActionTypes.GET_TOP_POST_SUCCESS:
      return {
        ...state,
        isFetchingTopPosts: false,
        top_formated: payload.top_formated,
      };

    default:
      return state;
  }
}
