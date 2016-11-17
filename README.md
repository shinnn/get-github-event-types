# get-github-event-types

[![NPM version](https://img.shields.io/npm/v/get-github-event-types.svg)](https://www.npmjs.com/package/get-github-event-types)
[![Build Status](https://travis-ci.org/shinnn/get-github-event-types.svg?branch=master)](https://travis-ci.org/shinnn/get-github-event-types)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-github-event-types.svg)](https://coveralls.io/github/shinnn/get-github-event-types?branch=master)
[![dependencies Status](https://david-dm.org/shinnn/get-github-event-types/status.svg)](https://david-dm.org/shinnn/get-github-event-types)
[![devDependencies Status](https://david-dm.org/shinnn/get-github-event-types/dev-status.svg)](https://david-dm.org/shinnn/get-github-event-types?type=dev)

A [Node](https://nodejs.org/) module to get [all Event types of the Github API](https://developer.github.com/v3/activity/events/types/#event-types--payloads) from [the API reference](https://developer.github.com/v3/activity/events/types/)

```javascript
const getGithubEventTypes = require('get-github-event-types');

getGithubEventTypes().then(eventTypes => {
  eventTypes; //=> ['CommitCommentEvent', 'CreateEvent', 'DeleteEvent', ...]
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install get-github-event-types
```

## API

```javascript
const getGithubEventTypes = require('get-github-event-types');
```

### getGithubEventTypes([*options*])

*options*: `Object` ([`Request` options](https://github.com/request/request#requestoptions-callback))  
Return: `Promise` of `Array`

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
