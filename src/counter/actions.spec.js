import chai, { expect } from 'chai';
import fetchMock from 'fetch-mock';
import { RND_API_URL } from 'APP_CONFIG';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
import { countChanged, countChangedSlow } from './actions';

chai.use(sinonChai);

describe('Counter Actions', () => {
  beforeEach(() => {})

  describe('countChangedSlow', () => {
    it('should dispatch the countChanged event with a value added from the API', () => {
      fetchMock.get(RND_API_URL, { status: 200, body: '10' });
      const dispatchSpy = spy();

      return countChangedSlow(10)(dispatchSpy).then(() => {
        const expected = countChanged(20);
        expect(dispatchSpy).to.have.been.calledWith(expected);
      });

    })
  });

  afterEach(() => {
    fetchMock.restore();
  });
});
