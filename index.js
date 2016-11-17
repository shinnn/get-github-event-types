'use strict';

const $ = require('cheerio');
const fettucine = require('fettuccine');

function toText(index, element) {
  return $(element).text();
}

function extractEventTypes({body}) {
  return $('#markdown-toc li > a', body).map(toText).toArray();
}

module.exports = function getGithubEventTypes(options) {
  options = Object.assign({
    baseUrl: 'https://developer.github.com/',
    headers: {}
  }, options);

  options.headers = Object.assign({
    'user-agent': 'get-github-event-types https://github.com/shinnn/get-github-event-types'
  }, options.headers);

  return fettucine('v3/activity/events/types/', options)
  .then(extractEventTypes);
};
