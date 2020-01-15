// parameters: {
//   headers: {
//     id: Joi.Object().required(),
//   },
//   path: {},
//   query: {},
//   body: {}
// }

const addHeadersParameters = require('./add-headers-parameters');

function addParameters(document, parameters) {
  const parsedParameters = [];

  if (parameters.headers) parsedParameters.push(addHeadersParameters(document, parameters.headers));

  return parsedParameters;
}

module.exports = addParameters;
