import { connect } from 'react-redux';
import LoginPage from './LoginPage';
// import { login, onFieldChange } from '../../actions/LoginPage';

const mapsDispatchToProps = (dispatch) => ({
  // onFieldChange(fieldName, fieldValue) {
  // 	dispatch(onFieldChange(fieldName, fieldValue));
  // },
  // login(opts) {
  // 	dispatch(login(opts));
  // },
});

export default connect(null, mapsDispatchToProps)(LoginPage);
