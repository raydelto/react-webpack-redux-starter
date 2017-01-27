import configure from 'fetch-ponyfill';
import Promise from 'bluebird';
import { apiErrorOccured } from './actions';

export default configure({ Promise });
