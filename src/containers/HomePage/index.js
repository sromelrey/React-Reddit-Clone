import { connect } from 'react-redux';
import HomePage from './HomePage';
import { getHot, getBest, getNew, getTop } from 'actions';

const mapsDispatchToProps = (dispatch) => ({
  getHot(sub_reddit) {
    dispatch(getHot(sub_reddit));
  },
  getBest(sub_reddit) {
    dispatch(getBest(sub_reddit));
  },
  getNew(sub_reddit) {
    dispatch(getNew(sub_reddit));
  },
  getTop(sub_reddit) {
    dispatch(getTop(sub_reddit));
  },
});

export default connect(null, mapsDispatchToProps)(HomePage);
