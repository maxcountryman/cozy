import sinon from 'sinon';
import test from 'ava';

import health from './health';

test('passes a suitable object to the response stream', (t) => {
  const req = {};
  const res = {};
  res.json = sinon.spy();

  health(req, res);

  t.true(res.json.withArgs({ okay: true }).calledOnce);
});
