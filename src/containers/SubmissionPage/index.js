import { connect } from 'react-redux';
import SubmissionPage from './SubmissionPage';
import { getSubmission, clearSubmission } from 'actions';

const mapsDispatchToProps = (dispatch) => ({
  getSubmission(submission_id) {
    dispatch(getSubmission(submission_id));
  },
  clearSubmission() {
    dispatch(clearSubmission());
  },
});

export default connect(null, mapsDispatchToProps)(SubmissionPage);
