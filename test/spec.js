const joiToOpenApiSpec = require('../lib/open-api-spec');

joiToOpenApiSpec.info.set({
  title: 'Sample API',
  description: 'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
  version: '0.1.9'
});

joiToOpenApiSpec.servers.add({
  url: 'http://api.example.com/v1',
  description: 'Optional server description, e.g. Main (production) server',
});

console.log(joiToOpenApiSpec.build());

const path = {
  path: '',
  method: '',
  description: '',
  summary: '',
  parameters: {
    headers: {
      id: Joi.Object().required(),
    },
    path: {},
    query: {},
    body: {}
  }
};

joiToOpenApiSpec.paths.set('/user/name');

