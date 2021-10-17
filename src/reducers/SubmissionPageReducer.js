import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  error: null,
  isFetchingSubmissionDetails: false,
  submission_details: [],
  presubmission_details: [],
  comments: [],
};

export default function SubmissionPageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        isFetchingSubmissionDetails: true,
      };
    case ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        isFetchingSubmissionDetails: false,
        submission_details: payload.submission_details,
        presubmission_details: payload.presubmission_details,
        comments: payload.comments,
      };
    case ActionTypes.GET_SUBMISSION_DETAILS_BY_ID_FAILED:
      return {
        ...state,
        isFetchingSubmissionDetails: false,
        error: payload.error,
      };
    case ActionTypes.CLEAR_SUBMISSION_DETAILS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
