import { fetchBuckets } from 'api/bucket/actions';
import { connect } from 'react-redux';
import { selectBuckets } from './selectors';
import S3Page from './s3-page.presentation';

const mapState = (state, props) => ({
  buckets: selectBuckets(state, props)
});

const mapDispatch = {
  fetchBuckets
};

export default connect(mapState, mapDispatch)(S3Page);
