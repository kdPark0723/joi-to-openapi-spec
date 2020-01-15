const addSchema = require('../schema/add-schema');

const parameterSet = new Set();

function addParameter(document, {name, where, description}, schema) {
  const id = {name, where};
  if (parameterSet.has(id)) return `#/components/parameters/${id}`;

  const parsedSchema = addSchema(document, schema);

  const parameterInfo = {
    name,
    'in': where,
    description,
    schema: {
      '$ref': parsedSchema,
    },
  };

  document.components.parameters.set(id, parameterInfo);
  parameterSet.add(id);

  return `#/components/parameters/${id}`;
}

module.exports = addParameter;
