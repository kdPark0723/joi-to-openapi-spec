const joiToOpenApiSpec = require('../lib');

joiToOpenApiSpec.info.set({
  title: 'Sample API',
  description: 'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
  version: '0.1.9'
});

joiToOpenApiSpec.servers.add({
  url: 'http://api.example.com/v1',
  description: 'Optional server description, e.g. Main (production) server',
});
