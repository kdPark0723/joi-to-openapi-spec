const convert = require('joi-to-json-schema');
const hash = require('../hash');

const schemaSet = new Set();

function addSchema(document, schema) {
  const name = schema.name || hash(schema.toString());
  if (schemaSet.has(name)) return `#/components/schemas/${name}`;

  const parsedSchema = convert(schema);

  document.components.schemas.set(name, parsedSchema);
  schemaSet.add(name);

  return `#/components/schemas/${name}`;
}

module.exports = addSchema;
