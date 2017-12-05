import test from 'ava';
import request from 'supertest';

import health from './health';

test('returns a healthful response', async (t) => {
  t.plan(2);

  const res = await request(health).get('/health');

  t.is(res.status, 200);
  t.true(res.body.okay);
});
