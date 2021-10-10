import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  showSignInForm: false,
  loading: false,
  email: '',
  password: '',
  error: '',
};

export default function LoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_LOGIN_PAGE_FORM_FIELD:
      return {
        ...state,
        [action.payload?.fieldName]: action.payload.fieldValue,
      };
    case ActionTypes.LOGIN_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        password: '',
        error: '',
      };
    case ActionTypes.LOGIN_AUTH_ERROR:
      return {
        ...state,
        loading: true,
        error: '',
      };

    default:
      return state;
  }
}

/**
 * Stores the access_token in local storage
 * and updates the HTTP header
 *
 * @param payload
 */
function setToken({ access_token, data }) {
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('user', JSON.stringify(data));
}
