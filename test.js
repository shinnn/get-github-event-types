'use strict';

const getGithubEventTypes = require('.');
const test = require('tape');

test('getGithubEventTypes()', t => {
  t.plan(2);

  getGithubEventTypes().then(result => {
    t.deepEqual(
      result.filter(v => !v.endsWith('Event')),
      [],
      'should be resolved with an array of Github Event types.'
    );
  }).catch(t.fail);

  getGithubEventTypes({baseUrl: 'foo'}).catch(({message}) => {
    t.strictEqual(
      message,
      'Invalid URI "foo/v3/activity/events/types/"',
      'should accept request options.'
    );
  });
});
